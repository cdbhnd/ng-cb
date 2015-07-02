# ng-cb
Reusable Angular.js components

# Usage


```html
<script type="text/javascript" src="/angular/angular.js"></script>
<script type="text/javascript" src="/cb/cb.components.min.js"></script>
```

Add the **cb.components** module as a dependency to your application module:

```js
var myAppModule = angular.module('MyApp', ['cb.components']);
```

## Validators 

### IP Address   


```html
<input type="text" name="IP" ng-model="vm.ipaddress" cb-ipaddress/>
<span ng-show="yourForm.IP.$error.ipaddress">Please enter valid IP address</span>
```

### Minimum 

```html
<input type="text" name="Price" ng-model="vm.price" cb-min="10"/>
<span ng-show="yourForm.Price.$error.min">Minimum price is 10</span>
```