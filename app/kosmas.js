<link href="https://cdn.jsdelivr.net/npm/suggestions-jquery@20.2.3/dist/css/suggestions.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/suggestions-jquery@20.2.3/dist/js/jquery.suggestions.min.js"></script>
<script type="text/javascript">

var token = "f736102990d35b299e896716d3fbac2f557a9d5d";
var type  = "ADDRESS";
var $street = $("[name='address']");



// город и улица
$street.suggestions({
  token: token,
  type: type,
  hint: false,
  bounds: "city-street",
});


       var zakaz = $("[name='Name']").parent().parent();
      $(zakaz).addClass('my-block2');

       var phoneZakaz = $("[name='Phone']").parent().parent();
      $(phoneZakaz).addClass('my-block2');

       var poluchatel = $("[name='poluchatel']").parent().parent();
       $(poluchatel).addClass('my-block2');

       var telPoluchatel = $("[name='tel-poluchatel']").parent().parent();
       $(telPoluchatel).addClass('my-block2');
        
      var date = $("[name='date1']").parent().parent().parent();
      $(date).addClass('my-block2');

      var time = $("[name='time']").parent().parent().parent();
      $(time).addClass('my-block2');
       
       var house = $("[name='house']").parent().parent();
      $(house).addClass('my-block');
      
     var corpus = $("[name='corpus']").parent().parent();
      $(corpus).addClass('my-block');

      
     var podezd = $("[name='podezd']").parent().parent();
      $(podezd).addClass('my-block');

      var domofon = $("[name='domofon']").parent().parent();
      $(domofon).addClass('my-block');

       var etazh = $("[name='etazh']").parent().parent();
      $(etazh).addClass('my-block');


       var kvartira = $("[name='kvartira']").parent().parent();
      $(kvartira).addClass('my-block');
      
$("[name='sam']").click(function() {
    
       var poluchatel = $("[name='poluchatel']").parent().parent();
       var telPoluchatel = $("[name='tel-poluchatel']").parent().parent();
    $(poluchatel).toggleClass("none");
   $(telPoluchatel).toggleClass("none");
 
});
</script>