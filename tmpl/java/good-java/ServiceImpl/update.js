
/// <summary>
/// <%=UpdateDescription%>
/// </summary>
/// <returns></returns>
/// @author <%=Author%>
/// @since <%=new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });%>
public void <%=UpdateServiceFunctionName%>(<%=UpdateParamsModelName%> pars)
{
  QueryWrapper<<%=TableName%>> queryWrapper = new QueryWrapper<>();
  <%UpdateParamsModel.forEach(function(col){%>
  queryWrapper.eq("<%=col.COLUMN_NAME%>", pars.get<%=col.ALIAS_NAME%>());<%})%>
	<%=TableName%> entity=_<%=TableName%>Mapper.selectOne(queryWrapper);
	<% UpdateDataModel.forEach(function(col){%>
  entity.set<%=col.ALIAS_NAME%>(pars.get<%=col.ALIAS_NAME%>());<%})%>
  _<%=TableName%>Mapper.updateById(entity);

}


