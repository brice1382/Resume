!function(){"use strict";angular.module("about",["ngRoute"])}(),function(){"use strict";function e(e,t,o){var n=this;n.regexp=function(){FlashManager.random()},n.goals=o.query(),n.orderProp="id",e.spacer="\t\t",n.hubs=[{Id:1,value:"https://github.com/brice1382/projectSP"},{Id:2,value:"https://github.com/brice1382/DotNetAPI"}],n.gitHub=function(){n.select,window.open("https://github.com/brice1382/projectSP","_blank","toolbar=no,scrollbars=no,top=0,left=500,resizable=yes,width=1000,height=800")},e.tasks=[{Id:1,value:"Move into mobile development."},{Id:2,value:"Gain the knowledge to be able to mentor younger developers."},{Id:3,value:"Use my knowledge of development to help impact my community in a positive way."}],e.docs=[{id:1,value:"docPDFs/ProdResume.pdf",link:"assets/ProdResume.pdf",linkTitle:"View/Download",icon:"https://png.icons8.com/pdf/color/48",icon2:"fa fa-user",title:"Brandon Rice | Web Developer | Resume",helper:"References available upon request"}],e.refs=[{id:1,value:"docPDFs/EF_CheatSheet.pdf",link:"assets/EF_CheatSheet.pdf",linkTitle:"EF_CheatSheet",icon:"https://png.icons8.com/pdf/color/48",icon2:"fa fa-file",title:"Entity Framework Cheat Sheet",helper:"Great reference from the good folks at www.EntityFrameworkTutorial.com"},{id:2,value:"docPDFs/RestFlow.jpg",link:"assets/RestFlow.jpg",linkTitle:"RestFlowVisual",icon:"https://png.icons8.com/jpg/color/48",icon2:"fa fa-file-image-o",title:"C Sharp Rest Flow",helper:"My visual reference of data flow using .NET"}],e.certs=[{licenseNum:-887156,certName:"HTML Fundamentals",completed:"April 2016",certImg:"assets/HTML.jpg"},{licenseNum:-887156,certName:"HTML Fundamentals",completed:"April 2016",certImg:"assets/HTML.jpg"},{licenseNum:-887156,certName:"HTML Fundamentals",completed:"April 2016",certImg:"assets/HTML.jpg"},{licenseNum:-887156,certName:"HTML Fundamentals",completed:"April 2016",certImg:"assets/HTML.jpg"},{licenseNum:-887156,certName:"HTML Fundamentals",completed:"April 2016",certImg:"assets/HTML.jpg"}]}angular.module("about").controller("AboutCtrl",e),e.$inject=["$scope","$routeParams","GoalService"]}(),function(){"use strict";angular.module("contact",["ngRoute","ngResource"])}(),function(){"use strict";function e(e){var t=this;t.max=250,t.characters=t.max+" Characters Left!!!",t.textLength=t.max,t.question={},t.question.ngKeyup=function(){var e=t.max-t.questionText.length;t.characters=e+" Characters Left!!!"};var o=function(){t.name="",t.phone="",t.email="",t.questionText="",t.characters=t.max+" Characters Left!!!",t.contact.$setPristine()};t.clearForm=function(){o()},t.SendContactForm=function(){swal({title:"Success",type:"success",text:"Thank You \r\n"+t.name+"\r\nI will be sure to get back to you as soon as possible.",showConfirmButton:!0}),o()}}angular.module("contact").controller("ContactCtrl",e),e.$inject=["$scope"]}(),function(){"use strict";angular.module("home",["ngRoute"])}(),function(){"use strict";function e(e,t){var o=this;o.about=function(){t.flashify(),location.href="#!/about"},o.contact=function(){location.href="#!/contact"},e.$on("$viewContentLoaded",function(){function e(){a.globalCompositeOperation="source-over",a.fillStyle="hsla(0,0%,0%,.1)",a.fillRect(0,0,n.width,n.height);var e,t,i;for(e=2*Math.sin(o)*Math.PI,t=0;t<600;++t)i=600*Math.sin(t*e),a.globalCompositeOperation="",a.fillStyle="hsla("+t+"12,100%, 40%,1)",a.beginPath(),a.arc(Math.sin(t)*i+n.width/2,Math.cos(t)*i+n.height/2,1.5,0,2*Math.PI),a.fill();return o+=5e-6,o%=2*Math.PI}function t(){window.requestAnimationFrame(t),e()}var o=0,n=document.querySelector("canvas"),a=n.getContext("2d");n.width=window.innerWidth,n.height=window.innerHeight,a.fillStyle="hsla(0,0%,0%,1)",window.addEventListener("resize",function(){n.width=window.innerWidth,n.height=window.innerHeight},!1),t()})}angular.module("home").controller("HomeCtrl",e),e.$inject=["$scope","FlashManager"]}(),function(){"use strict";angular.module("footer",["ngRoute"])}(),function(){"use strict";function e(e){this.date=(new Date).getFullYear()}angular.module("footer",["ngRoute"]).controller("FooterCtrl",e),e.$inject=["$scope"]}(),function(){"use strict";angular.module("navbar",[])}(),function(){"use strict";function e(e){e.home=function(){location.href="#!/home"},e.contact=function(){location.href="#!/contact"},e.about=function(){location.href="#!/about"}}angular.module("navbar").controller("NavbarCtrl",e),e.$inject=["$scope"]}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9tb2R1bGUuanMiLCJhYm91dEN0cmwuanMiLCJjb250YWN0Q3RybC5qcyIsImhvbWVDdHJsLmpzIiwiZm9vdGVyQ3RybC5qcyIsIm5hdmJhckN0cmwuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsIkFib3V0Q3RybCIsIiRzY29wZSIsIiRyb3V0ZVBhcmFtcyIsIkdvYWxTZXJ2aWNlIiwidm0iLCJ0aGlzIiwicmVnZXhwIiwiRmxhc2hNYW5hZ2VyIiwicmFuZG9tIiwiZ29hbHMiLCJxdWVyeSIsIm9yZGVyUHJvcCIsInNwYWNlciIsImh1YnMiLCJJZCIsInZhbHVlIiwiZ2l0SHViIiwic2VsZWN0Iiwid2luZG93Iiwib3BlbiIsInRhc2tzIiwiZG9jcyIsImlkIiwibGluayIsImxpbmtUaXRsZSIsImljb24iLCJpY29uMiIsInRpdGxlIiwiaGVscGVyIiwicmVmcyIsImNlcnRzIiwibGljZW5zZU51bSIsImNlcnROYW1lIiwiY29tcGxldGVkIiwiY2VydEltZyIsImNvbnRyb2xsZXIiLCIkaW5qZWN0IiwiQ29udGFjdEN0cmwiLCJtYXgiLCJjaGFyYWN0ZXJzIiwidGV4dExlbmd0aCIsInF1ZXN0aW9uIiwibmdLZXl1cCIsInRleHRMZWZ0IiwicXVlc3Rpb25UZXh0IiwibGVuZ3RoIiwicmVzZXRGb3JtIiwibmFtZSIsInBob25lIiwiZW1haWwiLCJjb250YWN0IiwiJHNldFByaXN0aW5lIiwiY2xlYXJGb3JtIiwiU2VuZENvbnRhY3RGb3JtIiwic3dhbCIsInR5cGUiLCJ0ZXh0Iiwic2hvd0NvbmZpcm1CdXR0b24iLCJIb21lQ3RybCIsImFib3V0IiwiZmxhc2hpZnkiLCJsb2NhdGlvbiIsImhyZWYiLCIkb24iLCJkcmF3IiwiJCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiYyIsIndpZHRoIiwiaGVpZ2h0IiwiZm9vIiwiaSIsInIiLCJNYXRoIiwic2luIiwidCIsIlBJIiwiYmVnaW5QYXRoIiwiYXJjIiwiY29zIiwiZmlsbCIsInJ1biIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwiRm9vdGVyQ3RybCIsImRhdGUiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJOYXZiYXJDdHJsIiwiaG9tZSJdLCJtYXBwaW5ncyI6IkNBQUEsV0FDQSxhQUVBQSxRQUNBQyxPQUFBLFNBQUEsWUFKQSxHQ0FBLFdBQ0EsYUFRQSxTQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxHQUNBLElBQUFDLEVBQUFDLEtBRUFELEVBQUFFLE9BQUEsV0FDQUMsYUFBQUMsVUFHQUosRUFBQUssTUFBQU4sRUFBQU8sUUFDQU4sRUFBQU8sVUFBQSxLQUVBVixFQUFBVyxPQUFBLE9BRUFSLEVBQUFTLE9BQ0FDLEdBQUEsRUFBQUMsTUFBQSwyQ0FDQUQsR0FBQSxFQUFBQyxNQUFBLDJDQUdBWCxFQUFBWSxPQUFBLFdBQ0FaLEVBQUFhLE9BQ0FDLE9BQUFDLEtBQUEseUNBQUEsU0FBQSxnRkFHQWxCLEVBQUFtQixRQUNBTixHQUFBLEVBQUFDLE1BQUEsa0NBQ0FELEdBQUEsRUFBQUMsTUFBQSxnRUFDQUQsR0FBQSxFQUFBQyxNQUFBLG1GQU9BZCxFQUFBb0IsT0FFQUMsR0FBQSxFQUNBUCxNQUFBLHlCQUNBUSxLQUFBLHdCQUNBQyxVQUFBLGdCQUNBQyxLQUFBLHNDQUNBQyxNQUFBLGFBQ0FDLE1BQUEsd0NBQ0FDLE9BQUEsc0NBSUEzQixFQUFBNEIsT0FFQVAsR0FBQSxFQUNBUCxNQUFBLDRCQUNBUSxLQUFBLDJCQUNBQyxVQUFBLGdCQUNBQyxLQUFBLHNDQUNBQyxNQUFBLGFBQ0FDLE1BQUEsK0JBQ0FDLE9BQUEsMkVBR0FOLEdBQUEsRUFDQVAsTUFBQSx1QkFDQVEsS0FBQSxzQkFDQUMsVUFBQSxpQkFDQUMsS0FBQSxzQ0FDQUMsTUFBQSxxQkFDQUMsTUFBQSxvQkFDQUMsT0FBQSxn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QUFwRCxPQUFBc0UsV0FDQW5CLEVBQUFFLE9BQUFyRCxPQUFBdUUsY0FDQSxHQTRCQU4sTUF6REFyRixRQUNBQyxPQUFBLFFBQ0FvQyxXQUFBLFdBQUF1QixHQUVBQSxFQUFBdEIsU0FBQSxTQUFBLGdCQVBBLEdIQUEsV0FDQSxhQUVBdEMsUUFDQUMsT0FBQSxVQUFBLFlBSkEsR0lBQSxXQUNBLGFBUUEsU0FBQTRGLEVBQUExRixHQUNBSSxLQUVBdUYsTUFBQSxJQUFBQyxNQUFBQyxjQVRBaEcsUUFDQUMsT0FBQSxVQUFBLFlBQ0FvQyxXQUFBLGFBQUF3RCxHQUVBQSxFQUFBdkQsU0FBQSxVQVBBLEdKQUEsV0FDQSxhQUVBdEMsUUFDQUMsT0FBQSxhQUpBLEdLQUEsV0FDQSxhQVFBLFNBQUFnRyxFQUFBOUYsR0FHQUEsRUFBQStGLEtBQUEsV0FDQW5DLFNBQUFDLEtBQUEsV0FHQTdELEVBQUFpRCxRQUFBLFdBQ0FXLFNBQUFDLEtBQUEsY0FHQTdELEVBQUEwRCxNQUFBLFdBQ0FFLFNBQUFDLEtBQUEsWUFsQkFoRSxRQUNBQyxPQUFBLFVBQ0FvQyxXQUFBLGFBQUE0RCxHQUVBQSxFQUFBM0QsU0FBQSxVQVBBIiwiZmlsZSI6ImFwcC0xNTAwNTIwOTU2LW1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCduYXZiYXInLCBbXSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ2Fib3V0JylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0Fib3V0Q3RybCcsIEFib3V0Q3RybCk7XG5cbiAgICBBYm91dEN0cmwuJGluamVjdCA9IFsnJHNjb3BlJywgJyRyb3V0ZVBhcmFtcycsICdHb2FsU2VydmljZSddO1xuXG4gICAgZnVuY3Rpb24gQWJvdXRDdHJsKCRzY29wZSwgJHJvdXRlUGFyYW1zLCBHb2FsU2VydmljZSkge1xuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgICAgIHZtLnJlZ2V4cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIEZsYXNoTWFuYWdlci5yYW5kb20oKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nb2FscyA9IEdvYWxTZXJ2aWNlLnF1ZXJ5KCk7XG4gICAgICAgIHZtLm9yZGVyUHJvcCA9ICdpZCc7XG5cbiAgICAgICAgJHNjb3BlLnNwYWNlciA9ICdcXHRcXHQnO1xuXG4gICAgICAgIHZtLmh1YnMgPSBbXG4gICAgICAgICAgICB7SWQ6IDEsIHZhbHVlOiAnaHR0cHM6Ly9naXRodWIuY29tL2JyaWNlMTM4Mi9wcm9qZWN0U1AnfSxcbiAgICAgICAgICAgIHtJZDogMiwgdmFsdWU6ICdodHRwczovL2dpdGh1Yi5jb20vYnJpY2UxMzgyL0RvdE5ldEFQSSd9XG4gICAgICAgIF07XG5cbiAgICAgICAgdm0uZ2l0SHViID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNlbGVjdCA9IHZtLnNlbGVjdDtcbiAgICAgICAgICAgIHZhciBuZXdXaW5kb3cgPSB3aW5kb3cub3BlbignaHR0cHM6Ly9naXRodWIuY29tL2JyaWNlMTM4Mi9wcm9qZWN0U1AnLCBcIl9ibGFua1wiLCBcInRvb2xiYXI9bm8sc2Nyb2xsYmFycz1ubyx0b3A9MCxsZWZ0PTUwMCxyZXNpemFibGU9eWVzLHdpZHRoPTEwMDAsaGVpZ2h0PTgwMFwiKTtcbiAgICAgICAgfTsgLy8gRGJkQ3RybFxuXG4gICAgICAgICRzY29wZS50YXNrcyA9IFtcbiAgICAgICAgICAgIHtJZDogMSwgdmFsdWU6ICdNb3ZlIGludG8gbW9iaWxlIGRldmVsb3BtZW50Lid9LFxuICAgICAgICAgICAge0lkOiAyLCB2YWx1ZTogJ0dhaW4gdGhlIGtub3dsZWRnZSB0byBiZSBhYmxlIHRvIG1lbnRvciB5b3VuZ2VyIGRldmVsb3BlcnMuJ30sXG4gICAgICAgICAgICB7SWQ6IDMsIHZhbHVlOiAnVXNlIG15IGtub3dsZWRnZSBvZiBkZXZlbG9wbWVudCB0byBoZWxwIGltcGFjdCBteSBjb21tdW5pdHkgaW4gYSBwb3NpdGl2ZSB3YXkuJ31cbiAgICAgICAgXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQXMgdGhpcyBnb3QgbGFyZ2VyIEkgd291bGQgc2VwYXJhdGUgaXQgb3V0IGludG8gdGhlaXIgb3duIEpTT04gZmlsZXMuIEZvciBub3cgaGVyZSBpcyBmYXN0ZXIgdG9cbiAgICAgICAgICogaW1wbGVtZW50IGFuZCBlYXNpZXIgdG8gZG8uXG4gICAgICAgICAqL1xuICAgICAgICAkc2NvcGUuZG9jcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2RvY1BERnMvUHJvZFJlc3VtZS5wZGYnLFxuICAgICAgICAgICAgICAgIGxpbms6ICdhc3NldHMvUHJvZFJlc3VtZS5wZGYnLFxuICAgICAgICAgICAgICAgIGxpbmtUaXRsZTogJ1ZpZXcvRG93bmxvYWQnLFxuICAgICAgICAgICAgICAgIGljb246ICdodHRwczovL3BuZy5pY29uczguY29tL3BkZi9jb2xvci80OCcsXG4gICAgICAgICAgICAgICAgaWNvbjI6ICdmYSBmYS11c2VyJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0JyYW5kb24gUmljZSB8IFdlYiBEZXZlbG9wZXIgfCBSZXN1bWUnLFxuICAgICAgICAgICAgICAgIGhlbHBlcjogJ1JlZmVyZW5jZXMgYXZhaWxhYmxlIHVwb24gcmVxdWVzdCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICAkc2NvcGUucmVmcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2RvY1BERnMvRUZfQ2hlYXRTaGVldC5wZGYnLFxuICAgICAgICAgICAgICAgIGxpbms6ICdhc3NldHMvRUZfQ2hlYXRTaGVldC5wZGYnLFxuICAgICAgICAgICAgICAgIGxpbmtUaXRsZTogJ0VGX0NoZWF0U2hlZXQnLFxuICAgICAgICAgICAgICAgIGljb246ICdodHRwczovL3BuZy5pY29uczguY29tL3BkZi9jb2xvci80OCcsXG4gICAgICAgICAgICAgICAgaWNvbjI6ICdmYSBmYS1maWxlJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0VudGl0eSBGcmFtZXdvcmsgQ2hlYXQgU2hlZXQnLFxuICAgICAgICAgICAgICAgIGhlbHBlcjogJ0dyZWF0IHJlZmVyZW5jZSBmcm9tIHRoZSBnb29kIGZvbGtzIGF0IHd3dy5FbnRpdHlGcmFtZXdvcmtUdXRvcmlhbC5jb20nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnZG9jUERGcy9SZXN0Rmxvdy5qcGcnLFxuICAgICAgICAgICAgICAgIGxpbms6ICdhc3NldHMvUmVzdEZsb3cuanBnJyxcbiAgICAgICAgICAgICAgICBsaW5rVGl0bGU6ICdSZXN0Rmxvd1Zpc3VhbCcsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2h0dHBzOi8vcG5nLmljb25zOC5jb20vanBnL2NvbG9yLzQ4JyxcbiAgICAgICAgICAgICAgICBpY29uMjogJ2ZhIGZhLWZpbGUtaW1hZ2UtbycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDIFNoYXJwIFJlc3QgRmxvdycsXG4gICAgICAgICAgICAgICAgaGVscGVyOiAnTXkgdmlzdWFsIHJlZmVyZW5jZSBvZiBkYXRhIGZsb3cgdXNpbmcgLk5FVCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICAkc2NvcGUuY2VydHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGljZW5zZU51bTogMTAxNC04ODgxNzAsXG4gICAgICAgICAgICAgICAgY2VydE5hbWU6ICdIVE1MIEZ1bmRhbWVudGFscycsXG4gICAgICAgICAgICAgICAgY29tcGxldGVkOiAnQXByaWwgMjAxNicsXG4gICAgICAgICAgICAgICAgY2VydEltZzogJ2Fzc2V0cy9IVE1MLmpwZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGljZW5zZU51bTogMTAxNC04ODgxNzAsXG4gICAgICAgICAgICAgICAgY2VydE5hbWU6ICdIVE1MIEZ1bmRhbWVudGFscycsXG4gICAgICAgICAgICAgICAgY29tcGxldGVkOiAnQXByaWwgMjAxNicsXG4gICAgICAgICAgICAgICAgY2VydEltZzogJ2Fzc2V0cy9IVE1MLmpwZyd9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpY2Vuc2VOdW06IDEwMTQtODg4MTcwLFxuICAgICAgICAgICAgICAgIGNlcnROYW1lOiAnSFRNTCBGdW5kYW1lbnRhbHMnLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogJ0FwcmlsIDIwMTYnLFxuICAgICAgICAgICAgICAgIGNlcnRJbWc6ICdhc3NldHMvSFRNTC5qcGcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpY2Vuc2VOdW06IDEwMTQtODg4MTcwLFxuICAgICAgICAgICAgICAgIGNlcnROYW1lOiAnSFRNTCBGdW5kYW1lbnRhbHMnLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogJ0FwcmlsIDIwMTYnLFxuICAgICAgICAgICAgICAgIGNlcnRJbWc6ICdhc3NldHMvSFRNTC5qcGcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpY2Vuc2VOdW06IDEwMTQtODg4MTcwLFxuICAgICAgICAgICAgICAgIGNlcnROYW1lOiAnSFRNTCBGdW5kYW1lbnRhbHMnLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogJ0FwcmlsIDIwMTYnLFxuICAgICAgICAgICAgICAgIGNlcnRJbWc6ICdhc3NldHMvSFRNTC5qcGcnXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxuXG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ2NvbnRhY3QnKVxuICAgICAgICAuY29udHJvbGxlcignQ29udGFjdEN0cmwnLCBDb250YWN0Q3RybCk7XG5cbiAgICBDb250YWN0Q3RybC4kaW5qZWN0ID0gWyckc2NvcGUnXTtcblxuICAgIGZ1bmN0aW9uIENvbnRhY3RDdHJsKCRzY29wZSkge1xuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgICAgIHZtLm1heCA9IDI1MDtcbiAgICAgICAgdm0uY2hhcmFjdGVycyA9IHZtLm1heCArICcgQ2hhcmFjdGVycyBMZWZ0ISEhJztcbiAgICAgICAgdm0udGV4dExlbmd0aCA9IHZtLm1heDtcblxuICAgICAgICB2bS5xdWVzdGlvbiA9IHt9O1xuXG4gICAgICAgIHZtLnF1ZXN0aW9uLm5nS2V5dXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0TGVmdCA9IHZtLm1heCAtIHZtLnF1ZXN0aW9uVGV4dC5sZW5ndGg7XG4gICAgICAgICAgICB2bS5jaGFyYWN0ZXJzID0gdGV4dExlZnQgKyAnIENoYXJhY3RlcnMgTGVmdCEhISc7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHJlc2V0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZtLm5hbWUgPSAnJztcbiAgICAgICAgICAgIHZtLnBob25lID0gJyc7XG4gICAgICAgICAgICB2bS5lbWFpbCA9ICcnO1xuICAgICAgICAgICAgdm0ucXVlc3Rpb25UZXh0ID0gJyc7XG4gICAgICAgICAgICB2bS5jaGFyYWN0ZXJzID0gdm0ubWF4ICsgJyBDaGFyYWN0ZXJzIExlZnQhISEnO1xuICAgICAgICAgICAgdm0uY29udGFjdC4kc2V0UHJpc3RpbmUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5jbGVhckZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5TZW5kQ29udGFjdEZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdUaGFuayBZb3UgJyArICdcXHJcXG4nICtcbiAgICAgICAgICAgICAgICB2bS5uYW1lICsgJ1xcclxcbicgK1xuICAgICAgICAgICAgICAgICdJIHdpbGwgYmUgc3VyZSB0byBnZXQgYmFjayB0byB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZS4nLFxuICAgICAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICB9XG5cbiAgICAgfVxufSkoKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdob21lJylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0hvbWVDdHJsJywgSG9tZUN0cmwpO1xuXG4gICAgSG9tZUN0cmwuJGluamVjdCA9IFsnJHNjb3BlJywgJ0ZsYXNoTWFuYWdlciddO1xuXG4gICAgZnVuY3Rpb24gSG9tZUN0cmwoJHNjb3BlLCBGbGFzaE1hbmFnZXIpIHtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcblxuICAgICAgICB2bS5hYm91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIEZsYXNoTWFuYWdlci5mbGFzaGlmeSgpO1xuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcjIS9hYm91dCc7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uY29udGFjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnIyEvY29udGFjdCc7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLiRvbignJHZpZXdDb250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHQgPSAwO1xuICAgICAgICAgICAgdmFyIGMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbiAgICAgICAgICAgIHZhciAkID0gYy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgYy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgYy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICAkLmZpbGxTdHlsZSA9ICdoc2xhKDAsMCUsMCUsMSknO1xuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICBjLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gZHJhdygpIHtcbiAgICAgICAgICAgICAgICAkLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgICAgICAgICAgJC5maWxsU3R5bGUgPSAnaHNsYSgwLDAlLDAlLC4xKSc7XG4gICAgICAgICAgICAgICAgJC5maWxsUmVjdCgwLCAwLCBjLndpZHRoLCBjLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgdmFyIGZvbywgaSwgaiwgcjtcbiAgICAgICAgICAgICAgICBmb28gPSBNYXRoLnNpbih0KSAqIDIgKiBNYXRoLlBJO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCA2MDA7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICByID0gNjAwICogTWF0aC5zaW4oaSAqIGZvbyk7XG4gICAgICAgICAgICAgICAgICAgICQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICQuZmlsbFN0eWxlID0gJ2hzbGEoJyArIGkgKyAxMiArICcsMTAwJSwgNDAlLDEpJztcbiAgICAgICAgICAgICAgICAgICAgJC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgJC5hcmMoTWF0aC5zaW4oaSkgKiByICsgKGMud2lkdGggLyAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguY29zKGkpICogciArIChjLmhlaWdodCAvIDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgMS41LCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgICAgICAgICAgICQuZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHQgKz0gMC4wMDAwMDU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQgJT0gMiAqIE1hdGguUEk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJ1bigpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJ1bik7XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBydW4oKTtcbiAgICAgICAgfSlcbiAgICB9XG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ2Zvb3RlcicsIFsnbmdSb3V0ZSddKVxuICAgICAgICAuY29udHJvbGxlcignRm9vdGVyQ3RybCcsIEZvb3RlckN0cmwpO1xuXG4gICAgRm9vdGVyQ3RybC4kaW5qZWN0ID0gWyckc2NvcGUnXTtcblxuICAgIGZ1bmN0aW9uIEZvb3RlckN0cmwoJHNjb3BlKSB7XG4gICAgICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAgICAgdm0uZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICB9XG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ25hdmJhcicpXG4gICAgICAgIC5jb250cm9sbGVyKCdOYXZiYXJDdHJsJywgTmF2YmFyQ3RybCk7XG5cbiAgICBOYXZiYXJDdHJsLiRpbmplY3QgPSBbJyRzY29wZSddO1xuXG4gICAgZnVuY3Rpb24gTmF2YmFyQ3RybCgkc2NvcGUpIHtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcblxuICAgICAgICAkc2NvcGUuaG9tZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcjIS9ob21lJztcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuY29udGFjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcjIS9jb250YWN0JztcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuYWJvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnIyEvYWJvdXQnO1xuICAgICAgICB9XG4gICAgfVxufSkoKTtcbiJdfQ==
