import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component( {
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    CommonModule,
    MatTabsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger( 'fadeInStagger', [
      transition( '* => *', [
        query( '.fade-in', [
          style( { opacity: 0 } ),
          stagger( '1000ms', [
            animate( 2000, keyframes( [
              style( { opacity: 0, transform: 'translateY(-50px)', offset: 0 } ),
              style( { opacity: .5, transform: 'translateY(15px)', offset: 0.3 } ),
              style( { opacity: 1, transform: 'translateY(0)', offset: 1.0 } ),
            ] )
            ),
          ] ),
        ],
          { optional: true } )
      ] )
    ] ),
  ]
} )
export class AppComponent {
  // #region Properties (1)

  public title = 'issueTabs_v18';

  // #endregion Properties (1)
}
