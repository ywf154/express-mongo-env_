# 步骤
## 一、关于软件包
### 1. express

Express.js 是一个流行的 Node.js Web 应用程序框架，它简化了构建 Web 应用程序和 API 的过程。下面是 Express.js 的基本用法：
首先，通过 npm安装 express：
```branch
npm install express
```
```javascript
//在项目文件中引入 Express.js 模块：
const express = require('express');
//创建一个 Express 应用程序实例：
const app = express();
//定义路由处理程序：
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
//启动 Express 应用程序并监听指定的端口：
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

在上述示例中，当收到来自根路径 `/` 的 HTTP GET 请求时，Express 将调用传递给 `app.get()` 方法的回调函数。回调函数接收两个参数 `req`（请求对象）和 `res`（响应对象），通过调用 `res.send()` 方法返回响应内容。

在上述示例中，应用程序通过调用 `app.listen()` 方法启动，并指定要监听的端口号。回调函数在服务器成功启动后执行，并打印一条消息到控制台。
通过以上步骤，您可以创建一个简单的 Express.js 应用程序，并定义路由处理程序来处理不同的 HTTP 请求。您可以定义更多的路由、中间件和功能来构建更复杂和功能丰富的应用程序。

请注意，这只是 Express.js 的基本用法示例。Express.js 还提供了许多其他功能和中间件，用于处理表单数据、路由参数、错误处理、会话管理等。您可以查阅 Express.js 的官方文档以获取更详细的信息和用法示例。

### 2. helmet

它有助于保护快速应用程序中的 HTTP 标头。

helmet 是一个 Node.js 的中间件，用于增强 Express.js 应用程序的安全性。它通过设置一系列 HTTP 头部来提供基本的安全防护措施，以减少常见的 Web 安全风险。
```javascript
const express = require('express');
const helmet = require('helmet');
const app = express();
app.use(helmet());
```
上述代码将 'helmet' 中间件应用于 Express 应用程序。
helmet() 函数返回一个中间件函数，它会自动设置一些常用的安全 HTTP 头部，例如 `X-XSS-Protection`、`Strict-Transport-Security`、`X-Content-Type-Options` 等，以及其他相关的安全设置。这些头部有助于减少跨站脚本攻击（XSS）、点击劫持、内容嗅探等常见的安全风险。
默认情况下，'helmet' 中间件启用了一组中间件函数，每个函数设置一个特定的 HTTP 头部。您可以根据需求选择启用或禁用特定的中间件函数。例如，要禁用特定中间件函数，可以按如下方式进行设置：
```javascript
app.use(
  helmet({
    contentSecurityPolicy: false, // 禁用 Content Security Policy 中间件
    frameguard: false, // 禁用 Frameguard 中间件
    // 其他需要禁用的中间件
  })
);
```
通过根据具体需求选择启用或禁用特定的中间件函数，您可以根据应用程序的安全需求进行定制。
### 3. morgan
   morgan 是一个常用的日志记录中间件，用于记录 Express.js 应用程序的 HTTP 请求日志。它可以帮助您监控应用程序的请求和响应，以便进行故障排查、性能分析和安全审计。以下是 morgan 的基本用法：
```javascript
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
```
上述代码将 'morgan' '中间件应用于 Express 应用程序。
'morgan' 函数接受一个字符串参数，用于指定日志的格式。`combined` 是其中一种常见的日志格式，它包含了请求方法、请求路径、状态码、响应时间等信息。您还可以根据需要选择其他日志格式，或者根据自己的要求自定义格式。
现在，当 Express 应用程序收到请求时，morgan 中间件将自动记录请求的相关信息。日志将打印到控制台或输出到指定的日志文件中，具体取决于您的配置和环境。
morgan 还支持更高级的用法，例如将日志输出到文件、自定义日志格式、根据请求的路径或状态码进行不同的日志记录等。您可以查阅 morgan 的官方文档以了解更多详细的用法和选项。

通过使用 morgan 中间件，您可以方便地记录和查看 Express.js 应用程序的请求日志，从而更好地了解应用程序的运行情况。这对于调试、性能监控和安全审计非常有帮助。
### 4. body-parser
body-parser 是一个 Node.js 中间件，用于解析 HTTP 请求的请求体（body）。它是在处理 Express.js 应用程序中的 POST、PUT、DELETE 等请求时特别有用，因为这些请求通常会包含要提交或更新的数据。

在较新的 Express 版本（4.16.0 及以上）中，body-parser 不再是必需的，因为它的功能已经集成到 Express 中。您可以直接使用 Express 内置的 express.json() 和 express.urlencoded() 中间件来处理请求体。

下面是使用 body-parser 的基本用法：
```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
```
上述代码将 `body-parser` 中间件应用于 Express 应用程序。

``body-parser` 提供了两个主要的中间件函数：`json()` 和 `urlencoded()`。`json()` 中间件用于解析 JSON 格式`body-parser` 是一个 Node.js 中间件，用于解析 HTTP 请求的请求体（body）。它是在处理 Express.js 应用程序中的 POST、PUT、DELETE 等请求时特别有用，因为这些请求通常会包含要提交或更新的数据。
在较新的 Express 版本（4.16.0 及以上）中，body-parser 不再是必需的，因为它的功能已经集成到 Express 中。您可以直接使用 Express 内置的 express.json() 和 express.urlencoded() 中间件来处理请求体。
```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
```
上述代码将 `body-parser` 中间件应用于 Express 应用程序。

``body-parser` 提供了两个主要的中间件函数：`json()` 和 `urlencoded()`。`json()` 中间件用于解析 JSON 格式的请求体，而 `urlencoded()` 中间件用于解析 URL 编码的请求体。

``app.use(bodyParser.json())` 将 `json()` 中间件应用于应用程序，使其能够解析 JSON 请求体，并将解析后的数据作为 `req.body` 可用。

``app.use(bodyParser.urlencoded({ extended: true }))` 将 `urlencoded()` 中间件应用于应用程序，使其能够解析 URL 编码的请求体，并将解析后的数据作为 `req.body` 可用。`extended: true` 选项允许将嵌套对象解析为 URL 编码的请求体。

通过使用 `body-parser` 中间件，您可以方便地访问和处理 Express.js 请求的请求体数据。请注意，在较新的 Express 版本中，您可以直接使用内置的 `express.json()` 和 `express.urlencoded()` 中间件，而无需显式地安装和使用 `body-parser`。

### 5. monk
monk 是一个 Node.js 的 MongoDB 驱动程序，它提供了一种简化的方式来与 MongoDB 数据库进行交互。它可以作为一个轻量级的对象文档映射（ODM）工具，帮助您在 Node.js 应用程序中更方便地进行 MongoDB 数据库操作。
```javascript
const monk = require('monk');
const db = monk('localhost/mydb');
```
在上述代码中，我们通过调用 `monk()` 方法连接到本地的名为 `mydb` 的 MongoDB 数据库。您可以根据实际情况修改连接字符串，以连接到您的 MongoDB 数据库。

现在，您可以使用 db 对象来执行各种数据库操作，例如插入文档、查询数据等。以下是一些示例：

插入文档：
```javascript
const collection = db.get('users');
collection.insert({ name: 'John', age: 30 });
```
查询数据：
```javascript
const collection = db.get('users');
const users = await collection.find({});
console.log(users);
```
在上述示例中，我们首先通过 `db.get()` 方法获取名为 `users` 的集合对象，然后可以使用集合对象执行插入、查询等操作。

``monk` 还提供了其他功能，例如更新文档、删除文档、创建索引等。您可以查阅 `monk` 的官方文档以获取更详细的使用指南和示例。
需要注意的是，monk 是一个轻量级的驱动程序，相对于更复杂的 MongoDB 驱动程序（如官方的 mongodb 驱动程序）来说，它提供了更简单的接口和更少的功能。如果您需要更高级的功能或更细粒度的控制，可以考虑使用其他 MongoDB 驱动程序。

使用 `monk` 库进行 MongoDB 的增删改查操作非常简单。以下是一些常见操作的示例代码：

**插入文档（Create）:**

```javascript
const monk = require('monk');
const db = monk('mongodb://localhost:27017/mydb');
const users = db.get('users');

const newUser = {
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com'
};

// 插入新文档
users.insert(newUser).then((insertedUser) => {
  console.log('插入成功:', insertedUser);
}).catch((error) => {
  console.error('插入失败:', error);
});
```

**查询文档（Read）:**

```javascript
// 查询所有文档
users.find({}).then((docs) => {
  console.log('查询结果:', docs);
}).catch((error) => {
  console.error('查询失败:', error);
});

// 根据条件查询文档
users.find({ age: { $gt: 25 } }).then((docs) => {
  console.log('查询结果:', docs);
}).catch((error) => {
  console.error('查询失败:', error);
});

// 根据 ID 查询单个文档
const userId = '1234567890';
users.findOne({ _id: userId }).then((doc) => {
  console.log('查询结果:', doc);
}).catch((error) => {
  console.error('查询失败:', error);
});
```

**更新文档（Update）:**

```javascript
const userId = '1234567890';
const updatedData = {
  name: 'Updated Name',
  age: 35
};

// 根据 ID 更新文档
users.update({ _id: userId }, { $set: updatedData }).then((result) => {
  console.log('更新成功:', result);
}).catch((error) => {
  console.error('更新失败:', error);
});
```

**删除文档（Delete）:**

```javascript
const userId = '1234567890';

// 根据 ID 删除文档
users.remove({ _id: userId }).then((result) => {
  console.log('删除成功:', result);
}).catch((error) => {
  console.error('删除失败:', error);
});
```

在上述示例中，我们首先连接到数据库并获取集合对象。然后，使用集合对象上的相应方法执行操作。注意，这里的操作都返回 Promise 对象，我们可以使用 `then` 和 `catch` 进行结果处理和错误处理。

对于查询操作，可以使用各种条件来指定查询的文档。在更新操作中，我们使用 `$set` 操作符来指定要更新的字段和值。在删除操作中，我们使用 `remove` 方法并传递一个条件来删除匹配的文档。

请根据您的具体需求和数据模型进行相应的修改和调整。

希望这些示例可以帮助您进行 MongoDB 的增删改查操作！如果您有任何其他问题，请随时提问。


### 6. joi
Joi 是一个用于 JavaScript 对象模式验证的库，它可以帮助您定义和验证数据的结构、类型和约束。它通常用于验证用户输入、API 请求参数、配置对象等，以确保数据的完整性和正确性。
```javascript
const Joi = require('joi');
//定义数据模式和验证规则：
const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  repeat_password: Joi.ref('password'),
  access_token: [Joi.string(), Joi.number()],
  birth_year: Joi.number().integer().min(1900).max(2023),
  gender: Joi.string().valid('male', 'female', 'other'),
  hobbies: Joi.array().items(Joi.string()),
});
```
在上述代码中，我们使用 `Joi.object()` 创建了一个对象模式，其中包含了各个字段的验证规则。例如，`username` 字段必须是一个字符串，只能包含字母和数字，长度在 3 到 30 之间，且必需；`email` 字段必须是一个有效的电子邮件地址；`password` 字段必须是一个由字母和数字组成的字符串，长度在 3 到 30 之间；`repeat_password` 字段的值必须与 `password` 字段相同；`access_token` 字段可以是字符串或数字；`birth_year` 字段必须是一个整数，取值在 1900 到 2023 之间；`gender` 字段必须是 "male"、"female" 或 "other" 中的一个；`hobbies` 字段必须是一个字符串数组。

对数据进行验证：
```javascript
const data = {
username: 'john123',
email: 'john@example.com',
password: 'abc123',
repeat_password: 'abc123',
access_token: 'xyz',
birth_year: 1990,
gender: 'male',
hobbies: ['reading', 'gaming'],
};
const result = schema.validate(data);
```
在上述代码中，我们使用 `schema.validate()` 方法对 `data` 进行验证。验证的结果将包含一个 `error` 属性，如果验证通过，`error` 将为 `undefined`，否则将包含有关验证错误的详细信息。

### 7. dotenv
dotenv 是一个用于加载环境变量的 Node.js 模块。它可以帮助您在开发应用程序时管理敏感的配置信息，例如数据库连接字符串、API 密钥等，而无需直接在代码中硬编码这些值。

以下是 dotenv 的基本用法：

```javascript
//在您的 Node.js 应用程序的入口文件（通常是主文件）中引入 dotenv 模块，并调用 config 方法：
require('dotenv').config();
//在应用程序的根目录中创建一个名为 .env 的文件，并在该文件中定义您的环境变量：
DB_HOST=localhost
DB_PORT=27017
API_KEY=your-api-key
//在上述示例中，我们定义了三个环境变量：`DB_HOST`、`DB_PORT` 和 `API_KEY`。
//在您的应用程序中，可以通过 process.env 对象访问 .env 文件中定义的环境变量的值：
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const apiKey = process.env.API_KEY;
```

在上述示例中，我们通过 `process.env` 对象获取了 `DB_HOST`、`DB_PORT` 和 `API_KEY` 环境变量的值，并将其赋给相应的变量。
通过使用 dotenv，您可以将敏感的配置信息存储在单独的 .env 文件中，并在应用程序中使用环境变量访问这些值。这样一来，您可以轻松地在不同环境（开发、测试、生产等）之间切换配置，而无需修改代码。请注意，.env 文件通常不应该被提交到版本控制系统，以确保敏感信息的安全性。

您还可以通过 .env 文件设置默认值，使用注释进行文档说明，以及在需要时将环境变量转换为特定的数据类型。更多详细的用法和选项，请查阅 dotenv 的官方文档。

### 8. nodemon
nodemon 是一个用于开发 Node.js 应用程序的工具，它可以在文件发生变化时自动重新启动应用程序，从而提高开发效率。通常在开发过程中使用 nodemon 可以避免您每次修改代码后都需要手动重新启动应用程序。

以下是 nodemon 的基本用法：

在命令行中，进入您的 Node.js 应用程序的根目录，然后使用 nodemon 命令启动应用程序：
```shell
nodemon app.js
```
在上述示例中，我们假设您的应用程序的入口文件是 `app.js`。您需要将命令行的启动命令替换为您实际的应用程序入口文件。

当您修改应用程序的代码时，nodemon 会自动检测到文件的变化，并重新启动应用程序。您无需手动停止和启动应用程序，以便查看代码更改的效果。

``nodemon还提供了一些额外的选项和功能，例如监听特定文件或目录、忽略特定文件或目录、执行预处理操作等。您可以通过nodemon --help命令或查阅nodemon` 的官方文档来了解更多详细信息。

使用 nodemon 可以极大地简化开发过程，特别是在进行代码调试和实时修改时。它可以帮助您节省大量的时间和精力，同时提高开发效率和体验。请注意，nodemon 主要用于开发环境，不建议在生产环境中使用。

## 二、设置快速 Web 服务器

### 路径：./src/server.js
```javascript
//导入需要的模块
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const monk = require('monk');
require('dotenv').config();//环境变量设置

const app = express();

app.use(helmet());//用于安全保护
app.use(morgan('dev'));//把“.dev”的文件设置为环境变量
app.use(bodyParser.json());
//设置服务器端口
const port = process.env.PORT || 8080;
app.listen(port, () => {
console.log(`Listening on port ${port}`);
});
```
## 三、创建和配置 .env 文件
### 路径：./.env
它包含我们使用的所有环境变量。
TEST_DB_URL变量用于测试用例，以防止在数据库中插入测试数据。此外，您可以指定所需的端口号。
创建三个文件：
```copy
DB_URL = localhost/my-employees
TEST_DB_URL = localhost/test-my-employees
PORT = 5000
```
## 四、创建数据架构、验证规则

### 路径：./src/db/schema.js
```javascript
const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()//姓名的类型
        .min(3)//长度在3-30之间
        .max(30)
        .required(),
    job: Joi.string()
        .min(3)
        .max(30)
        .required(),
})

module.exports = schema;
```
## 五、连接到数据库

### ./src/db/connection.js

```javascript
const monk = require('monk');

let dbUrl = process.env.DB_URL;//使用这个外部设置的环境变量

if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.TEST_DB_URL;
}

const db = monk(dbUrl);

module.exports = db;
```
## 六、创建错误中间件以处理错误

### ./src/middlewares/index.js

```javascript
function notFound(req, res, next) {
    res.status(404);
    const error = new Error('Not Found', req.originalUrl);
    next(error);
}

function errorHandler(err, req, res, next){
    res.status(res.statusCode || 500);
    res.json({
        message: err.message,
        stack: err.stack
    });
}

module.exports = {
    notFound,
    errorHandler
}
```
## 七、导入中间件
### 路径：.\src\app.js
```javascript
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
//在此处：
const { notFound, errorHandler } = require('./middlewares');

require('dotenv').config();

const schema = require('./db/schema');
const db = require('./db/connection');
const employees = db.get('employees');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```
# 八、对API 端点进行编码
### 路径：.\src\app.js
```javascript
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const { notFound, errorHandler } = require('./middlewares');

require('dotenv').config();

const schema = require('./db/schema');
const db = require('./db/connection');
const employees = db.get('employees');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());

/* Get all employees */
app.get('/', async (req, res, next) => {
    try {
        const allEmployees = await employees.find({});
        res.json(allEmployees);
    } catch(error) {
        next(error);
    }
});
/* Get a specific employee */
app.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const employee = await employees.findOne({
            _id: id
        });

        if(!employee) {
            const error = new Error('Employee does not exist');
            return next(error);

        }
    res.json(employee);
    } catch(error) {
        next(error);
    }
});
/* Create a new employee */
app.post('/', async (req, res, next) => {
    try {
        const { name, job } = req.body;
        const result = await schema.validateAsync({ name, job });

        const employee = await employees.findOne({
            name,
        })

        // Employee already exists
        if (employee) {
            res.status(409); // conflict error
            const error = new Error('Employee already exists');
            return next(error);
        } 

        const newuser = await employees.insert({
            name,
            job,
        });

        console.log('New employee has been created');
        res.status(201).json(newuser);
    } catch(error) {
        next(error);
    }
});
/* Update a specific employee */
app.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, job } = req.body;
        const result = await schema.validateAsync({ name, job });
        const employee = await employees.findOne({
            _id: id
        });

        // Employee does not exist
        if(!employee) {
            return next();
        }

        const updatedEmployee = await employees.update({
            _id: id,
            }, {  
            $set: result},
            { upsert: true }
        );

        res.json(updatedEmployee);
    } catch(error) {
        next(error);
    }
});

/* Delete a specific employee */
app.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const employee = await employees.findOne({
            _id: id
        });

        // Employee does not exist
        if(!employee) {
            return next();
        }
        await employees.remove({
            _id: id
        });

        res.json({
            message: 'Success'
        });

    } catch(error) {
        next(error);
    }
});

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```
## 九、转到该文件并将脚本部分替换为以下内容package.json
```copy
"scripts": {
"start": "node src/server.js",
"dev": "nodemon src/server.js"
},
```
该命令启动 Node.js 应用程序，该命令启动 Node.js 应用程序，唯一的区别是我们所做的任何更改都将由 nodemon 自动监控。npm startnpm run dev

## 十、“拆分”并创建文件。./src/server.js   ./src/app.js
### 路径：./src/app.js
```javascript
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const { notFound, errorHandler } = require('./middlewares');

require('dotenv').config();

const schema = require('./db/schema');
const db = require('./db/connection');
const employees = db.get('employees');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());

/* Get all employees */
app.get('/', async (req, res, next) => {
try {
const allEmployees = await employees.find({});
res.json(allEmployees);
} catch(error) {
next(error);
}
});

/* Get a specific employee */
app.get('/:id', async (req, res, next) => {
try {
const { id } = req.params;
const employee = await employees.findOne({
_id: id
});

        if(!employee) {
            const error = new Error('Employee does not exist');
            return next(error);
        }

    res.json(employee);
    } catch(error) {
        next(error);
    }
});

/* Create a new employee */
app.post('/', async (req, res, next) => {
try {
const { name, job } = req.body;
const result = await schema.validateAsync({ name, job });

        const employee = await employees.findOne({
            name,
        })

        // Employee already exists
        if (employee) {
            res.status(409); // conflict error
            const error = new Error('Employee already exists');
            return next(error);
        } 

        const newuser = await employees.insert({
            name,
            job,
        });

        console.log('New employee has been created');
        res.status(201).json(newuser);
    } catch(error) {
        next(error);
    }
});

/* Update a specific employee */
app.put('/:id', async (req, res, next) => {
try {
const { id } = req.params;
const { name, job } = req.body;
const result = await schema.validateAsync({ name, job });
const employee = await employees.findOne({
_id: id
});

        // Employee does not exist
        if(!employee) {
            return next();
        }

        const updatedEmployee = await employees.update({
            _id: id,
            }, {  
            $set: result},
            { upsert: true }
        );

        res.json(updatedEmployee);
    } catch(error) {
        next(error);
    }
});

/* Delete a specific employee */
app.delete('/:id', async (req, res, next) => {
try {
const { id } = req.params;
const employee = await employees.findOne({
_id: id
});

        // Employee does not exist
        if(!employee) {
            return next();
        }
        await employees.remove({
            _id: id
        });

        res.json({
            message: 'Success'
        });

    } catch(error) {
        next(error);
    }
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
```
### 服务器模块
./src/server.js
```javascript
const app = require('./app');

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

## 最后一步是重构我们的代码并创建 ../src/routes/employees
### 路由模块
./src/routes/employees.js

```javascript
const express = require('express');
const schema = require('../db/schema');
const db = require('../db/connection');

const employees = db.get('employees');

const router = express.Router();

/* Get all employees */
router.get('/', async (req, res, next) => {
  try {
    const allEmployees = await employees.find({});
    res.json(allEmployees);
  } catch (error) {
    next(error);
  }
});

/* Get a specific employee */
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const employee = await employees.findOne({
      _id: id,
    });

    if (!employee) {
      const error = new Error('Employee does not exist');
      return next(error);
    }

    res.json(employee);
  } catch (error) {
    next(error);
  }
});

/* Create a new employee */
router.post('/', async (req, res, next) => {
  try {
    const { name, job } = req.body;
    const result = await schema.validateAsync({ name, job });

    const employee = await employees.findOne({
      name,
    });

    // Employee already exists
    if (employee) {
      const error = new Error('Employee already exists');
      res.status(409); // conflict error
      return next(error);
    }

    const newuser = await employees.insert({
        name,
        job,
    });

    res.status(201).json(newuser);
  } catch (error) {
    next(error);
  }
});

/* Update a specific employee */
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, job } = req.body;
    const result = await schema.validateAsync({ name, job });
    const employee = await employees.findOne({
      _id: id,
    });

    // Employee does not exist
    if (!employee) {
      return next();
    }

    const updatedEmployee = await employees.update({
      _id: id,
    }, { $set: result },
    { upsert: true });

    res.json(updatedEmployee);
  } catch (error) {
    next(error);
  }
});

/* Delete a specific employee */
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const employee = await employees.findOne({
      _id: id,
    });

    // Employee does not exist
    if (!employee) {
      return next();
    }
    await employees.remove({
      _id: id,
    });

    res.json({
      message: 'Employee has been deleted',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
```
### ./src/app.js 文件如下所示
```javascript
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const { notFound, errorHandler } = require('./middlewares');

const app = express();

require('dotenv').config();

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());

const employees = require('./routes/employees');

app.use('/api/employees', employees);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
```
