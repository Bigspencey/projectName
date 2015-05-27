$(document).ready(function(event){$j("#searchText").endecaSearchSuggest({minAutoSuggestInputLength:2,autoSuggestServiceUrl:contextRoot+"/search/includes/typeaheadcontent.jsp",contextPath:contextRoot,delay:250,timeOut:2000});
});
function removeDefaultText(){var sText=$("#searchText").val();
if(sText!=undefined&&sText=="Search products, recipes, and more"){$("#searchText").val("");
$("#searchText").removeClass("ghost").addClass("noghost");
}}function addDefaultText(){var sText=$("#searchText").val();
if(sText!=undefined&&sText==""){$("#searchText").val("Search products, recipes, and more");
$("#searchText").removeClass("noghost").addClass("ghost");
}}function removeDoubelQuotes(){var q=$("input#searchText").val();
var patt=new RegExp('"[^*.]*"');
var check=patt.test(q);
if(check){q=q.replace(/\"/g,"");
document.getElementById("searchText").value=q;
}}function submitSearch(){var sText=$("input#searchText").val();
if(sText!=undefined&&sText!="Search products, recipes, and more"&&sText.trim()!=""){$("#searchForm").submit();
}}