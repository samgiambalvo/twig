var divs = Array.prototype.slice.call(document.querySelectorAll('[data-range]'));

document.addEventListener('mousemove', function(e){
  
  var eased = e.pageX / window.innerWidth;
  
  divs.forEach(function(div){
    
    var range = div.getAttribute('data-range').split(',');
    var min = parseFloat(range[0]);
    var max = parseFloat(range[1]);
    
    var ease = min + (eased * (max - min));
    
    div.style.webkitTransform = 'translateX(' + ease + '%)';
    div.style.transform = 'translateX(' + ease + '%)';
    
  });
  
});

$( document ).ready(function() {
  $(".filter-three").addClass('filter-selected');
  $("#myChartTwo").addClass('hide');
  $("#myChartThree").addClass('hide');
  
	$(".filter-one").click(function() {
    $( ".chart-filter p" ).not(this).removeClass('filter-selected');
		$(this).addClass('filter-selected');
    $( "#myChart" ).addClass('hide');
    $( "#myChart" ).removeClass('show');
    $( "#myChartTwo" ).addClass('hide');
    $( "#myChartTwo" ).removeClass('show');
    window.setTimeout(function() {
       $( "#myChartThree" ).addClass('show');
       $( "#myChartThree" ).removeClass('hide');
    }, 500);
	});
	$(".filter-two").click(function() {
    $( ".chart-filter p" ).not(this).removeClass('filter-selected');
		$(this).addClass('filter-selected');
    $( "#myChart" ).addClass('hide');
    $( "#myChart" ).removeClass('show');
    $( "#myChartThree" ).addClass('hide');
    $( "#myChartThree" ).removeClass('show');
    window.setTimeout(function() {
       $( "#myChartTwo" ).addClass('show');
       $( "#myChartTwo" ).removeClass('hide');
    }, 500);
	});
	$(".filter-three").click(function() {
    $( ".chart-filter p" ).not(this).removeClass('filter-selected');
		$(this).addClass('filter-selected');
    $( "#myChartTwo" ).addClass('hide');
    $( "#myChartTwo" ).removeClass('show');
    $( "#myChartThree" ).addClass('hide');
    $( "#myChartThree" ).removeClass('show');
    window.setTimeout(function() {
       $( "#myChart" ).addClass('show');
       $( "#myChart" ).removeClass('hide');
    }, 500);
	});
});
