using <%=EntityNamespace%>;
using <%=IRepositoryNamespace%>.BASE;

namespace <%=IRepositoryNamespace%>
{
  <% const now=new Date()%>
  /**
   *
   * @author <%=Author%>
   * @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
   */
    public interface <%=TableName%>IRepository : IBaseRepository<<%=TableName%>>
    {
    }
}

