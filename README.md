
  

# ngx-addchat
Adding instance message shortcut to your website.
Now supported platform:
1. Whatsapp
2. Facebook Messenger

## Getting Started

### Installation
Install using npm:
```bash
npm install ngx-addchat --save
```

### Usage

1. Import `NgxAddchatModule` to your `app.module.ts`.
	```typescript
	import { NgxAddchatModule } from  'ngx-addchat'; // <-- Add this
	...

	@NgModule({
	imports: [
		NgxAddchatModule // <-- And this
	],
	...
	})
	```

2. Add element to HTML
	```html
	...
	<chat-container></chat-container>
	...
	```

## Configuration

### Whatsapp phone number
```
phoneNumber="<country code><phone number>"
```
Insert `phoneNumber` into the `<chat-container>`.
**_Example_**
```html
<chat-container phoneNumber="85255737471"></chat-container>
```
`852` is the country code of Hong Kong, and `5573 7471` is the phone number we want.


## License

This project is licensed under the MIT License - see the LICENSE file for details

  

## Credit
The whole idea is from whatshelp:
- [whatshelp]

And the tools using in this project:
- [ionicons v2.0.1](http://ionicons.com/)
- [Facebook plugin](https://developers.facebook.com/docs/plugins/page-plugin)

 
## Improvement
1. Security
[Whatshelp] is providing a snippet which including cross-site scripting (XSS). It may encounter some potential security issues. For more information, please check in [Angular.io/security](https://angular.io/guide/security#xss).

## Roadmap
- Adding more popular IM platforms

- Adding and customising the pop-out animations

- Customising the color of bubbles

## Limitation
This library is only tested on [Angular.io](https://angular.io).



[whatshelp]: https://whatshelp.io/widget