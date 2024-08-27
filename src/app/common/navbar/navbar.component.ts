import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements DoCheck,OnInit {
  showmenu: boolean = false;
  routevalue = ''
  submenu=''
  constructor(private router: Router,private route:ActivatedRoute){}

    ngOnInit(): void {
      // if params has /:id or /:submenu
      // this.routevalue=this.route.snapshot.paramMap.get('id') as string;
      // this.submenu=this.route.snapshot.paramMap.get('submenu') as string;
      // console.log(this.routevalue);
      // console.log(this.submenu);
    }
  
  ngDoCheck(): void {
    let currentUrl =this.router.url
    if(currentUrl === '/login'|| currentUrl ==='/register'){
      this.showmenu = false
    }else{
      this.showmenu = true
    }
  }

}
