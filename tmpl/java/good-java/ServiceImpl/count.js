// <summary>
// <%=CountDescription%>
// </summary>
// <returns></returns>
/// @author <%=Author%>
/// @since <%=new Date().toISOString().replace('T', ' ').substring(0, 19);%>
public long <%=CountServiceFunctionName%>(<%if(CountParamsModelName){%><%=CountParamsModelName%> pars <%}%>)
{
	QueryWrapper<<%=TableName%>> queryWrapper = new QueryWrapper<>();
  <% CountParamsModel.forEach(function(col){ %>
  queryWrapper.eq("<%=col.COLUMN_NAME%>", pars.get<%=col.ALIAS_NAME%>());<%})%>
	return _<%=TableName%>Mapper.selectCount(queryWrapper);
}

