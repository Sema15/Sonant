import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    mobileMenu(event) {
        let mobmenu = document.getElementById('main-menu');
        let bg = document.getElementsByClassName('mob_menu_close')[0];
        mobmenu.classList.toggle('mob_list');
        let windowWidth = document.documentElement.clientWidth;
        if (windowWidth > 1095) {
            return;
        } else {
            bg.classList.toggle('mob_menu_close_active');
        }
    }

    removeClass(event) {
        let mobmenu = document.getElementById('main-menu');
        let bg = document.getElementsByClassName('mob_menu_close')[0];
        mobmenu.classList.toggle('mob_list');
        let windowWidth = document.documentElement.clientWidth;
        if (windowWidth > 1095) {
            return;
        } else {
            bg.classList.toggle('mob_menu_close_active');
        }
    }
}
