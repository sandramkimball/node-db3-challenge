# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
    SELECT Categories.CategoryName, Products.ProductName
        from [Products] 
        join Categories on [Products].CategoryID = Categories.Category.ID;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
    SELECT Orders.OrderID, Shippers.ShipperName
        from [Shippers]
        join Orders on [Shippers].ShipperID = Shippers.ShipperID
        order by Orders.OrderDate;

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
    SELECT Products.ProductName, OrderDetails.Quantity
        from [OrderDetails]
        join Products on [OrderDetails].ProductID = Products.ProductID
        join Orders on [OrderDetails].OrderID = Orders.OrderID
        where Orders.OrderID = '10251';

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
    SELECT OrderID, CustomerName as Customer, Employees.LastName as Employee
        from [Orders]
        join Customers on [Orders].CustomerID = Customers.CustomerID
        join Employees on [Orders].EmployeeID = Employees.EmployeeID;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
    SELECT CategoryName, count(*) as Count
        from [Categories]
        group by CategoryName;

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 
   SELECT Orders.OrderID, count(*) as ItemCount
        from [OrderDetails]
        join Orders on [OrderDetails].OrderID = Orders.OrderID
        group by Orders.OrderID ;