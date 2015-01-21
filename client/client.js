/**
 *  Client side code for Meteor Portfolio
 */

if (Meteor.isClient) {

    Meteor.subscribe('projects');

    Template.app.rendered = function(){

        var windowHeight = window.innerHeight,
            spinnerOuter = $('.main-spinner'),
            spinnerInner = spinnerOuter.find('.spinner'),
            items = $('.item');
        setTimeout(function(){

            spinnerOuter.velocity(
                {
                    opacity: 0
                },
                {
                    duration: 400,
                    complete: function(){
                        console.log('Welcome to the main page!');
                        spinnerOuter.css('display', 'none');
                        items.velocity({opacity: 1}, {
                            duration: 300,
                            complete:function(){
                                console.log('This is just an easter egg ;)');
                                items.find('h4').addClass('animated fadeInUp');
                            }
                        });
                    }
                }
            );

        }, 1300);
    };

    Template.appInitial.rendered = function(){
        // Animated Header
        (function() {

            var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

            // Main
            initHeader();
            initAnimation();
            //addListeners();

            function initHeader() {
                width = window.innerWidth;
                height = window.innerHeight;
                target = {x: width/2, y: height/2};

                largeHeader = document.getElementById('large-header');
                largeHeader.style.height = height + 'px';

                canvas = document.getElementById('demo-canvas');
                canvas.width = width;
                canvas.height = height;
                ctx = canvas.getContext('2d');

                // create points
                points = [];
                for(var x = 0; x < width; x = x + width / 30) {
                    for(var y = 0; y < height; y = y + height / 30) {
                        var px = x + Math.random() * width / 30;
                        var py = y + Math.random() * height / 30;
                        var p = {x: px, originX: px, y: py, originY: py };
                        points.push(p);
                    }
                }

                // for each point find the 3 closest points
                for(var i = 0; i < points.length; i++) {
                    var closest = [];
                    var p1 = points[i];
                    for(var j = 0; j < points.length; j++) {
                        var p2 = points[j];
                        if(!(p1 == p2)) {
                            var placed = false;
                            for(var k = 0; k < 15; k++) {
                                if(!placed) {
                                    if(closest[k] == undefined) {
                                        closest[k] = p2;
                                        placed = true;
                                    }
                                }
                            }

                            for(var k = 0; k < 15; k++) {
                                if(!placed) {
                                    if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                        closest[k] = p2;
                                        placed = true;
                                    }
                                }
                            }
                        }
                    }
                    p1.closest = closest;
                }

                // assign a circle to each point
                for(var i in points) {
                    var c = new Circle(points[i], 4+Math.random()*3, 'rgba(234, 224, 218, 0.94)');
                    points[i].circle = c;
                }
            }

            // animation
            function initAnimation() {
                animate();
                for(var i in points) {
                    shiftPoint(points[i]);
                }
            }

            function animate() {
                if(animateHeader) {
                    ctx.clearRect(0,0,width,height);
                    for(var i in points) {
                        // detect points in range
                        if(Math.abs(getDistance(target, points[i])) < 15000) {
                            points[i].active = 0.3;
                            points[i].circle.active = 0.6;
                        } else if(Math.abs(getDistance(target, points[i])) < 50000) {
                            points[i].active = 0.4;
                            points[i].circle.active = 0.7;
                        } else if(Math.abs(getDistance(target, points[i])) < 60000) {
                            points[i].active = 0.2;
                            points[i].circle.active = 0.5;
                        } else {
                            points[i].active = 0;
                            points[i].circle.active = 0;
                        }

                        //drawLines(points[i]);
                        points[i].circle.draw();
                    }
                }
                requestAnimationFrame(animate);
            }

            function shiftPoint(p) {
                TweenLite.to(p,1.5,
                    {
                        x: p.originX + 80 + Math.random() * 250,
                        y: p.originY + 80 + Math.random() * 250,
                        ease: Linear.easeInOut,
                        onComplete: function() {
                            shiftPoint(p);
                        }
                    });
            }

            // Canvas manipulation
//            function drawLines(p) {
//                if(!p.active) return;
//                for(var i in p.closest) {
//                    ctx.beginPath();
//                    ctx.moveTo(p.x, p.y);
//                    ctx.lineTo(p.closest[i].x, p.closest[i].y);
//                    ctx.strokeStyle = 'rgba(217, 234, 244,'+ p.active+')';
//                    ctx.stroke();
//                }
//            }
            function Circle(pos,rad,color) {
                var _this = this;

                // constructor
                (function() {
                    _this.pos = pos || null;
                    _this.radius = rad || null;
                    _this.color = color || null;
                })();

                this.draw = function() {
                    if(!_this.active) return;
                    ctx.beginPath();
                    ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
                    ctx.fillStyle = 'rgba(156,217,249,'+ _this.active+')';
                    ctx.fill();
                };
            }

            // Util
            function getDistance(p1, p2) {
                return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
            }

        })();
    }
}