<%
var data=''
if(GetListDataModel.length>0){
   let dataArr=GetListDataModel.map(col=>{
	 return `\n\t\t${col.ALIAS_NAME}=a.${col.ALIAS_NAME}`
    })
    data=`a=>new ${GetListDataModelName}{
       ${dataArr.join(",")}
    }`
}
%>
/// <summary>
/// <%=GetListDescription%>
/// </summary>
/// <returns></returns>
public List<<%=GetListDataModelName%>>? <%=GetListServiceFunctionName%>(<% if(GetListSqlWhere) {%> <%=GetListParamsModelName%> pars <%}%>)
{
  var list = _unitOfWork.<%=TableName%>Repository.query()
	<% if(GetListSqlWhere)  {%>.Where(<%-GetListSqlWhere%>)<%}%>
	<% GetListOrderBy.forEach(function(col){%>
    <%if(GetListOrder=="desc") {%>.OrderBy(a=>a.<%=col.ALIAS_NAME%>)<%}else{%>
    .OrderByDescending(a=>a.<%=col.ALIAS_NAME%>)<%}})%>
    <%if(data){%>.Select(<%-data%>)	<%}%>
    .ToList();
	return list;

}
