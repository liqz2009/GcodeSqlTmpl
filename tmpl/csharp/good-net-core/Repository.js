using  <%=EntityNamespace%>;
using  <%=IRepositoryNamespace%>;
using <%=RepositoryNamespace%>.BASE;
using <%=UnitOfWorkNamespace%>;


namespace <%=RepositoryNamespace%>
{
  <% const now=new Date()%>
  /**
   *
   * @author <%=Author%>
   * @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
   */
   public class  <%=TableName%>Repository : BaseRepository< <%=TableName%>>, <%=TableName%>IRepository
    {
        public  <%=TableName%>Repository(MyDbContext context) : base(context)
        {
        }
    }
 }
