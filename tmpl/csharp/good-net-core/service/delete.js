<% const now=new Date()%>
/// @author <%=Author%>
/// @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
/// <summary>
/// <%=DeleteDescription%>
/// </summary>
/// <returns></returns>
public void <%=DeleteServiceFunctionName%>(<%=DeleteParamsModelName%> pars)
{
  _unitOfWork.<%=TableName%>Repository.Remove(<%-DeleteSqlWhere%>);
  _unitOfWork.SaveChanges();
}
