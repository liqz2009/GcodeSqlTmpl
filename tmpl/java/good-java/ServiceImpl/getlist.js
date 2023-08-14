<%
var data=''
if(GetListDataModel){
   let dataArr=GetListDataModel.map(col=>{
	 return `"${col.COLUMN_NAME}"`
    })
    data=dataArr.join(",")
}
%>
<%
var order=null
if(GetListOrderBy){
  let arr=GetListOrderBy.map(col=>{
       return `"${col.COLUMN_NAME}"`
  })
  order=`${arr.join(',')}`
}

%>
/// <summary>
/// <%=GetListDescription%>
/// </summary>
/// <returns></returns>
/// @author <%=Author%>
/// @since <%=new Date().toISOString().replace('T', ' ').substring(0, 19);%>
public List<<%=TableName%>> <%=GetListServiceFunctionName%>(<% if(GetListParamsModelName) {%> <%=GetListParamsModelName%> pars <%}%>)
{
  QueryWrapper<<%=TableName%>> queryWrapper = new QueryWrapper<>();
  <% GetListParamsModel.forEach(function(col){ %>
  queryWrapper.eq("<%=col.COLUMN_NAME%>", pars.get<%=col.ALIAS_NAME%>());<%})%>
  <%if(data){%>queryWrapper.select(<%-data-%>);<%}%>
  <%if(GetListOrder=="desc"){%>queryWrapper.orderByDesc(<%-order%>);<%}else if(GetListOrder=="asc"){%>queryWrapper.orderByAsc(<%-order%>);<%}%>
  return _<%=TableName%>Mapper.selectList(queryWrapper);
}
