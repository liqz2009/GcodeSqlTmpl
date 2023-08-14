<% const now=new Date()%>
/// @author <%=Author%>
/// @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
/// <summary>
/// <%=CountDescription%>
/// </summary>
/// <returns></returns>
public int <%=CountServiceFunctionName%>(<%if(CountSqlWhere){%> <%=CountParamsModelName%> pars <%}%>)
{
  var count=_unitOfWork.<%=TableName%>Repository.Count(<%-CountSqlWhere%>);
  return count;
}

