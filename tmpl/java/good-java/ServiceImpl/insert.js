/// <summary>
/// <%=InsertDescription%>
/// </summary>
/// <returns></returns>
/// @author <%=Author%>
/// @since <%=new Date().toISOString().replace('T', ' ').substring(0, 19);%>
public void <%=InsertServiceFunctionName%>(<%=InsertParamsModelName%> pars)
{
	<%=TableName%> entity=new <%=TableName%>();
	<% InsertParamsModel.forEach(function(col){ %>
    entity.set<%=col.ALIAS_NAME%>(pars.get<%=col.ALIAS_NAME%>());<%})%>
  _<%=TableName%>Mapper.insert(entity);

}

