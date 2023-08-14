<%
var data=''
if(GetPageDataModel.length>0){
   let dataArr=GetPageDataModel.map(col=>{
	 return `\n\t\t${col.ALIAS_NAME}=a.${col.ALIAS_NAME}`
    })

    data=`a=>new ${GetPageDataModelName}{
       ${dataArr.join(",")}
    }`
}

%>
/// <summary>
/// <%=GetPageDescription%>
/// </summary>
/// <returns></returns>
public List<<%=GetPageDataModelName%>> <%=GetPageServiceFunctionName%>( <%=GetPageParamsModelName%> pars)
{
  var list = _unitOfWork.<%=TableName%>Repository.query()
    <% if(GetPageSqlWhere)  {%>.Where(<%-GetPageSqlWhere%>)<%}%>
  <% GetPageOrderBy.forEach(function(col){%>
    <%if(GetPageOrder=="desc") {%>.OrderBy(a=>a.<%=col.ALIAS_NAME%>)<%}else{%>
    .OrderByDescending(a=>a.<%=col.ALIAS_NAME%>)<%}})%>
    <%if(data){%>.Select(<%-data%>)	<%}%>
    .Skip((pars.PageIndex - 1) * pars.PageSize)
    .Take(pars.PageSize)
    .ToList();
  return list;

}

