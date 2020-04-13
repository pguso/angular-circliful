# Angular Circliful 

Draws an animatable svg circle with some other features in your angular projects.

## Getting started

#### Install circliful in your project
```
npm install angular-circliful
```

#### Once installed you need to import the module:</h3>
```typescript
import {AngularCirclifulModule} from 'angular-circliful';

@NgModule({
  ...
  imports: [AngularCirclifulModule, ...],
  ...
})
export class AppModule {}
```

#### Integrate the component somewhere in your Application</h3>
```typescript
export class YourComponent {
percent = 60;
strokeWidth: 15;
color: 'blue';
}
```

```html
<ac-angular-circliful 
[percent]="percent" 
[strokeWidth]="strokeWidth"
[color]="color">
</ac-angular-circliful>
```

Available Options

| property        | default           | type  | description
| ------------- |------------- | ----- | ----- |
| percent      | 65 | number | the percentage of the circle
| color      | #666 | string | color foreground circle 
| gradient      | / | object | startColor and endColor for gradient of foreground circle
| customClasses      | / | object | set custom css classes for each svg child element 
| strokeLinecap      | butt | string | style of stroke endings
| strokeWidth      | 15 | number | stroke width of foreground circle
| progressColors      | / | array | holds an array of objects with color and percent, the percent value is the starting point for the color change
| backgroundCircle      | / | object | config for the background circle 
| animate      | true | boolean | animation of the foreground circle
| animateInView      | false | boolean | animation of the foreground circle in viewport
| text      | / | object | config for the info text
| point      | / | object | config for a point in the center 

**gradient** start end end color of gradient

| property        | default           | type  
| ------------- |------------- | ----- | 
| startColor      | / | string 
| endColor      | / | string

**customClasses** set custom css classes for each svg child element

| property        | default           | type  
| ------------- |------------- | ----- | 
| foregroundCircle      | / | string 
| backgroundCircle      | / | string
| percent      | / | string 
| text      | / | string
| svgContainer      | / | string
| point      | / | string

**progressColors** holds an array of objects with color and percent, the percent value is the starting point for the color change

| property        | default           | type  
| ------------- |------------- | ----- | 
| color      | / | string 
| percent      | / | number 

**backgroundCircle** config for the background circle

| property        | default           | type  
| ------------- |------------- | ----- | 
| color      | / | string 
| strokeWidth      | / | number

**text** config for the info text

| property        | default           | type  
| ------------- |------------- | ----- | 
| position      | 'middle' | string 
| x      | / | number
| y      | / | number
| content      | / | string

**point** config for a point in the center

| property        | default           | type  
| ------------- |------------- | ----- | 
| color      | / | string 
| radius      | / | number






Donation
--------
If you find this module useful or/and use it commercially feel free to donate me a cup of coffee :)

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=D3F2MMNDHQ9KQ)
