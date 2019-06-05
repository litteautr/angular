import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component( {
    selector: 'app-hero-detail2',
    templateUrl: './hero-detail2.component.html',
    styleUrls: ['./hero-detail2.component.css']
} )
export class HeroDetail2Component implements OnInit {

    hero: Hero;

    constructor(
        private route: ActivatedRoute,
        private heroService: HeroService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getHero();
    }

    getHero(): void {
        const id = +this.route.snapshot.paramMap.get( 'id' );
        this.heroService.getHero( id )
            .subscribe( hero => this.hero = hero );
    }

    goBack(): void {
        this.location.back();
    }
    
    save(): void {
        this.heroService.updateHero( this.hero )
            .subscribe(() => this.goBack() );
    }
}