using <%=IServiceNamespace%>;
using <%=EntityNamespace%>;
using <%=ModelsNamespace%>;
using <%=UnitOfWorkNamespace%>;

namespace <%=ServiceNamespace%>
{
  <% const now=new Date()%>
  /**
   *
   * @author <%=Author%>
   * @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
   */
    public class <%=TableName%>Service :<%=TableName%>IService
    {
      UnitOfWork _unitOfWork;
      public <%=TableName%>Service(UnitOfWork unitOfWork)
      {
        _unitOfWork = unitOfWork;
      }
    }
}
