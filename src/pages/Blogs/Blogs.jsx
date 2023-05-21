
const Blogs = () => {
    return (
        <div className="max-w-7xl mx-auto p-2 my-10">
            <div className="my-10">
                <h2 className=" text-5xl font-bold mb-5">* What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className="text-2xl text-gray-600">
                    -- Access token is a short-lived token that is used to request permission to access protected resources. <br />
                    The client includes the access token in each request to the server to access protected resources or perform authorized actions. That have an expiration time. When an access token expires, the client needs to obtain a new one.  <br />
                    --Refresh token is a long-lived token that is used to generate a new Access Token. <br />
                    When the access token expires, the client sends the refresh token to the server to request a new access token.If the refresh token is valid, the server issues a new access token to the client.
                </p>
            </div>
            <div className="my-10 space-y-3">
                <h2 className=" text-5xl font-bold mb-5">* Compare SQL and NoSQL databases?</h2>
                <p className="text-2xl text-gray-600">
                    -- Type :<br />
                    SQL databases are primarily called Relational Databases (RDBMS), whereas NoSQL databases are primarily called non-relational or distributed databases.
                </p>
                <p className="text-2xl text-gray-600">
                    -- Query Language: <br />
                    SQL databases use the SQL query language, NoSQL databases have their own query languages or APIs specific to their data models.
                </p>
                <p className="text-2xl text-gray-600">
                    -- Data Model: <br />
                   In SQL databases, data is structured in tables with predefined schemas. <br />
                   NoSQL databases use various data models, such as key-value, document, columnar, or graph. They offer flexible schemas, allowing for dynamic and unstructured data.
                </p>
            </div>
            <div className="my-10 space-y-3">
                <h2 className=" text-5xl font-bold mb-5">* What is express js? What is Nest JS?</h2>
                <p className="text-2xl text-gray-600">
                    -- ExpressJs : Express is a minimal , flexible and popular web application framework for Node.js that simplifies the process of building web applications and APIs. 
                </p>
                <p className="text-2xl text-gray-600">
                    -- NestJS : Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js.
                </p>
            </div>
            <div className="my-10">
                <h2 className=" text-5xl font-bold mb-5">* What is MongoDB aggregate and how does it work?</h2>
                <p className="text-2xl text-gray-600">
                    -- Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. Each stage performs a specific operation, such as filtering, grouping, sorting, and calculating aggregations. 
                </p>
            </div>
        </div>
    );
};

export default Blogs;