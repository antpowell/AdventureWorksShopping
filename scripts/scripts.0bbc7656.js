"use strict";angular.module("adventureWorksShoppingApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$locationProvider","$routeProvider",function(a,b){a.hashPrefix("!"),b.when("/",{templateUrl:"views/categories.html",controller:"MainCtrl",controllerAs:"main"}).when("/register",{templateUrl:"views/register.html",controller:"AboutCtrl",controllerAs:"about"}).when("/login",{templateUrl:"views/login.html",controller:"AboutCtrl",controllerAs:"about"}).when("/bikes",{templateUrl:"views/bikes.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("adventureWorksShoppingApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("adventureWorksShoppingApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("adventureWorksShoppingApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/bikes.html",'<div class=""> <h1 class="text-center">Bikes</h1> <div class="inventory"> <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> <div class="img"> <h4 class="text-center">Mountain Bikes</h4> <div id="mountain-bike"></div> </div> </div> <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> <div class="img"> <h4 class="text-center">Hybrid Bikes</h4> <div id="hybrid-bike"></div> </div> </div> <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> <div class="img"> <h4 class="text-center">Cruiser Bikes</h4> <div id="cruiser-bike"></div> </div> </div> <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> <div class="img"> <h4 class="text-center">BMX Bikes</h4> <div id="bmx-bike"></div> </div> </div> <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> <div class="img"> <h4 class="text-center">Folding Bikes</h4> <div id="folding-bike"></div> </div> </div> </div> </div>'),a.put("views/categories.html",'<div class=""> <h1 class="text-center">All Categories</h1> <div class="inventory"> <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> <div class="img"> <h4 class="text-center">Bikes</h4> <a href="#!/bikes" id="bike"></a> </div> </div> <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> <div class="img under-construction"> <h4 class="text-center">Components</h4> <a id="components" data-toggle="modal" href="#under-construction"></a> </div> </div> <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> <div class="img under-construction"> <h4 class="text-center">Clothing</h4> <a id="clothing" data-toggle="modal" href="#under-construction"></a> </div> </div> <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> <div class="img under-construction"> <h4 class="text-center">Accessories</h4> <a id="accessories" data-toggle="modal" href="#under-construction"></a> </div> </div> </div> </div>'),a.put("views/login.html",'<div class=""> <h2 class="text-center">Log In</h2> <div id="registration-form-conatiner" class="col-xs-8 col-xs-offset-2"> <form> <!--<h3>Come On In<br><small>We are here to help.</small></h3>--> <div class="row"> <div class="form-group flex-cs-middle"> <label for="email">Login Email</label> <input type="text" id="email" class="form-control"> </div> </div> <div class="row"> <div class="form-group"> <label for="password">Password</label> <input type="password" id="password" class="form-control"> </div> </div> <div class="row pull-right"><button type="button" class="btn btn-primary">Log in</button></div> <div class="row col-xs-12"><a href="#!/view1">Register</a> if you don\'t have an account.</div> </form> </div> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.c582c4d1.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/register.html",'<div class=""> <h2 class="text-center">Register</h2> <div id="registration-form-conatiner" class="col-xs-8 col-xs-offset-2"> <form> <h3>Personal Information</h3> <div class="row"> <div class="form-group flex-cs-middle"> <label for="email">Login Email</label> <input type="text" id="email" class="form-control"> </div></div> <div class="row"> <div class="form-group"> <label for="firstname">First Name</label> <input type="text" id="firstname" class="form-control"> </div></div> <div class="row"> <div class="form-group"> <label for="lastname">Last Name</label> <input type="text" id="lastname" class="form-control"> </div></div> <div class="row"> <div class="form-group"> <label for="password">Password</label> <input type="password" id="password" class="form-control"> </div></div> <div class="row"> <div class="form-group"> <label for="confirm_password">Confirm Password</label> <input type="password" id="confirm_password" class="form-control"> </div></div> <h3>Address Information</h3> <div class="row"> <div class="form-group"> <label for="address">Address</label> <input type="text" id="address" class="form-control"> </div></div> <div class="row"> <div class="form-group"> <label for="city">City</label> <input type="text" id="city" class="form-control"> </div></div> <div class="row"> <div class="form-group"> <label for="state">State</label> <input type="text" id="state" class="form-control"> </div></div> <div class="row"> <div class="form-group"> <label for="zip">Zip Code</label> <input type="number" id="zip" class="form-control"> </div></div> <div class="row pull-right"><button type="button" class="btn btn-primary form-control">Register</button></div> </form></div> </div>')}]);