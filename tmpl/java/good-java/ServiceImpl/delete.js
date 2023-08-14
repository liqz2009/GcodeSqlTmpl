/// <summary>
/// <%=DeleteDescription%>
/// </summary>
/// <returns></returns>
/// @author <%=Author%>
/// @since <%=new Date().toISOString().replace('T', ' ').substring(0, 19);%>
public int <%=DeleteServiceFunctionName%>(<%=DeleteParamsModelName%> pars)
{
  QueryWrapper<<%=TableName%>> queryWrapper = new QueryWrapper<>();
  <%DeleteParamsModel.forEach(function(col){ %>queryWrapper.eq("<%=col.COLUMN_NAME%>", pars.get<%=col.ALIAS_NAME%>());<%})%>
  return _<%=TableName%>Mapper.delete(queryWrapper);
}
