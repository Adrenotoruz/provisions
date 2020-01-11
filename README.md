### Bootstrap version

### Api documentation

# Provisions
Microservice which serves rest api endpoints for `ProvisionsWebClient` and `ProvisionsMobileClient`(in future).

## Running app(developement env)
First of all, you need to get a `SQL Server 2012` database.
You need also to change connection string to your database in `appsettings.json` file.

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "YOUR CONNECTION STRING HERE"
  }
 ```

In comand line, open folder which consist `Provisions` project and type following comands:
  - `dotnet ef database update`
  - `dotnet restore`
  - `dotnet run`

## Testing app
In comand line, open folder which consist `Provisions.IntegrationTests` project and type following comands:
  - `dotnet test`
  
## API endopints
Provisions api provides following api endpoints:

### Authorization
| Endpoint | Input | Output | Request method | Auth needed |
|     :---:    |     :---:      |     :---:     |     :---:     |    :---:     |
|api/authorize/login|Username, Password|AuthToken|POST|No
|api/authorize/register|Username, Password, PasswordConfirm, Email|Error, Message, Result|POST|No

### Statuses list
| Endpoint | Input | Output | Request method | Auth needed |
|     :---:    |     :---:      |     :---:     |     :---:     |    :---:     |
|api/status/get|-|Statuses array|GET|Yes

### Provisions
| Endpoint | Input | Output | Request method | Auth needed |
|     :---:    |     :---:      |     :---:     |     :---:     |    :---:     |
|api/provisions/get|-|User provisions array|GET|Yes
|api/provisions/add|Name, Description(optional), Weight(optional), StartDate(optional)|Result, Message, Error|PUT|Yes
|api/provisions/remove|Name|Result, Message, Error|DELETE|Yes

### Days
| Endpoint | Input | Output | Request method | Auth needed |
|     :---:    |     :---:      |     :---:     |     :---:     |    :---:     |
|api/days/get|number|Day|GET|Yes
|api/days/add|Name, Description(optional), Weight(optional), Date(optional), Status, Provision, Difficulty|Result, Message, Error|PUT|Yes
|api/days/remove|Provision, Date|Result, Message, Error|DELETE|Yes

### Admin
| Endpoint | Input | Output | Request method | Auth needed |
|     :---:    |     :---:      |     :---:     |     :---:     |    :---:     |
|api/admin|-|Users|GET|Yes(admin role)
|api/admin/removeUser/{userId}|-|HttpResult|DELETE|Yes(admin role)
|api/admin/removeRole|userId, roleName|HttpResult|DELETE|Yes(admin role)
|api/admin/addRole|userId, roleName|HttpResult|POST|Yes(admin role)
