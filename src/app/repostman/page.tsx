import Link from 'next/link'

export default function RePostman() {
  return (
    <div className="min-h-screen p-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">RePostman</h1>
          <p className="text-xl text-gray-600 mb-6">
            为开发者和测试人员打造的全功能 API 测试工具
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
            让你可以直接在浏览器中高效、便捷地测试各种 API
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/hiawui/re-postman"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              View on GitHub
            </a>
          </div>
          
          <div className="mt-6 text-center">
            <Link
              href="/repostman/privacy"
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              隐私协议
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-semibold mb-6">🔧 主要特性</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold">多种 HTTP 请求支持</h3>
                  <p className="text-gray-600">支持发送 GET、POST、PUT、DELETE 等多种 HTTP 请求方法</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold">多种请求体格式</h3>
                  <p className="text-gray-600">支持 JSON、Form Data、x-www-form-urlencoded 等格式</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold">请求历史记录</h3>
                  <p className="text-gray-600">完整的请求历史，可一键恢复参数和配置</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold">请求集合管理</h3>
                  <p className="text-gray-600">支持拖拽排序与组织，高效管理 API 请求</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold">环境变量系统</h3>
                  <p className="text-gray-600">支持优先级合并的环境变量管理</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold">响应预览</h3>
                  <p className="text-gray-600">支持 JSON/XML 格式化及 HTML/Markdown 渲染</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold">Chrome 扩展架构</h3>
                  <p className="text-gray-600">完美集成浏览器，提供原生体验</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6">🚀 适用场景</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-700 mb-2">API 开发与测试</h3>
                <p className="text-blue-600 text-sm">快速验证 API 接口的功能和性能</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-green-700 mb-2">后端服务验证</h3>
                <p className="text-green-600 text-sm">确保后端服务按预期工作</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold text-purple-700 mb-2">Web 服务调试</h3>
                <p className="text-purple-600 text-sm">调试和排查 Web 服务问题</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-semibold text-orange-700 mb-2">RESTful API 探索</h3>
                <p className="text-orange-600 text-sm">探索和理解第三方 API 接口</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-red-700 mb-2">集成开发工作流</h3>
                <p className="text-red-600 text-sm">集成到开发流程中，提高开发效率</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 