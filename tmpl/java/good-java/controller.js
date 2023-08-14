package <%=ControllerNamespace %> ;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.good.domain.controller.BaseController;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import <%=ServiceNamespace%>.<%=TableName%>ServiceImpl;
import <%=IServiceNamespace%>.IUserLoginToken;
import <%=ModelsNamespace%>.Result;
import com.good.domain.controller.BaseController;
<% const now=new Date()%>
/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author <%= Author %>
 * @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
 */

@Api(tags = "<%=tableComment%>")
@RestController
@RequestMapping("/webadmin/<%=TableName%>")
public class <%=TableName%>Controller extends BaseController{
    @Autowired
    private <%=TableName%>ServiceImpl <%=TableName%>Service;
}
