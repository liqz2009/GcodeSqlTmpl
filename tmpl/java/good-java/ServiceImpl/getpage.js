<%
var data=''
if(GetPageDataModel){
   let dataArr=GetPageDataModel.map(col=>{
	 return `"${col.COLUMN_NAME}"`
    })
    data=dataArr.join(",")
}
var order=null
if(GetPageOrderBy){
  let arr=GetPageOrderBy.map(col=>{
      return `"${col.COLUMN_NAME}"`
  })
  order=`${arr.join(',')}`
}

%>
/// <summary>
/// <%=GetPageDescription%>
/// </summary>
/// <returns></returns>
/// @author <%=Author%>
/// @since <%=new Date().toISOString().replace('T', ' ').substring(0, 19);%>
public IPage<<%=TableName%>> <%=GetPageServiceFunctionName%>(<%=GetPageParamsModelName%> par)
{
  Page<<%=TableName%>> page = new Page<>(par.getPageIndex(), par.getPageSize());
  QueryWrapper<<%=TableName%>> queryWrapper = new QueryWrapper<>();
  <% GetPageParamsModel.forEach(function(col){ %>
  queryWrapper.eq("<%=col.COLUMN_NAME%>", par.get<%=col.ALIAS_NAME%>());<%})%>
  <%if(data)  {%>queryWrapper.select(<%-data%>); <%}%>
  <%if(GetPageOrder=="desc"){%>queryWrapper.orderByDesc(<%-order%>);<%}else if(GetPageOrder=="asc") {%> queryWrapper.orderByAsc(<%-order%>);<%}%>

  return _<%=TableName%>Mapper.selectPage(page,queryWrapper);
}

