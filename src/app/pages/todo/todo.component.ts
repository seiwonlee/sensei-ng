import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashService } from 'src/app/services/dash.service';
import { LayoutBaseComponent } from '../layout-base/layout-base.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  itemsOrig:any;
  items:any;
  menu:any=[];
  tags:any=[];
  showSideHover=false;
  detailVisible=false;
  view:any;
  routeParams:any;

  constructor(
    private dashService: DashService,
    private base: LayoutBaseComponent,
    private route: ActivatedRoute,
    private router: Router,
  ) { 
    this.route.paramMap.subscribe(params => {
      console.log(params);
      //if params.view then disable animation
      this.base.showCssAnim = params.get('view') ? false : true;
      this.filterData(params)
      this.preventParentScroll();
    });
    
  }

  ngOnInit(): void {
    this.setupRouter();
    this.getTasks();
    this.getMenu();
    this.getTags();
  }
  setupRouter(){
    // this.router.routeReuseStrategy.shouldReuseRoute = () => {
    //   return false;
    // };
    this.routeParams = this.route.snapshot.params;
  }

  getMenu(){
    this.menu = [
      {id:1, name:'My Tasks',link:'/todo/my-tasks', icon:'pi-envelope', selected:true},
      {id:1, name:'Important',link:'/todo/important', icon:'pi-star'},
      {id:1, name:'Completed',link:'/todo/completed', icon:'pi-check-circle'},
      {id:1, name:'Deleted',link:'/todo/deleted', icon:'pi-trash'},
    ]
  }
  getTags(){
    const tags = ["high","medium","low","blocked","update"];
    this.tags = tags.map(d=>({name:d, selected:false}));
  }
  preventParentScroll(){
    this.base.hideOverflow = true;
  }

  getTasks(){
    this.dashService.getTodo().then(d => {
      this.itemsOrig = d.tasks.slice();//immutable orig (react pattern)
      this.items = d.tasks;
      this.filterData(this.routeParams);
    });
  }
  filterData(args){
    //filter data on clientside
    const params = args.params;
    if (!this.items || !params) return;
    if (params.view === 'important'){
      this.items = this.itemsOrig.filter(d=>d.starred);
    }
    else if (params.view === 'completed'){
      this.items = this.itemsOrig.filter(d=>d.completed);
    }
    else if (params.view === 'deleted'){
      this.items = this.itemsOrig.filter(d=>d.deleted);
    }
    else if (this.tags.map(d=>d.name).includes(params.view)){
      this.items = this.itemsOrig.filter(d=>d.tags.includes(params.view));
    }
    else{
      this.items = this.itemsOrig;
    }
  }
  selectTask(e){
    this.detailVisible = true;
  }
  starTask(e, item){
    e.preventDefault();
    e.stopPropagation();
    item.starred=!item.starred
  }
  completeTask(e, item){
    e.preventDefault();
    e.stopPropagation();
    item.completed=!item.completed
  }
}
