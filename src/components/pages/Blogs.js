import React from 'react';

const Blogs = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="w-75 mx-auto text-center">
                <h2>Difference between authorization and authentication</h2>
                <p>There are some common differences between them. First of all authorization confirms a user whether he is real or not. If the user is not real we will not let enter them to our site. Authentication is really important against spammers. On the other hand authorization is a limitation of a user as how many permission or access a user have in a website. Authorization is a kind of filtering process of premium users and normal users.By authorization we can also know that who is the real owner of the site and who is just a user</p>
                <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>Firebase is a kind of method to authenticate users easily. We cab easily use them by reading their docs. They also give us permission to host our sute to firebase which is also another benefit.It also have massive security benefit as it is a google based authentication mechanism.That's why we are using it. There are also other options to implement authentication like MongoDb,Passport,Okta,AuthO etc. Therse are also popular nowadays</p>
                <h2>What other services does firebase provide other than authentication</h2>
                <p>Firbase gives us a lot of useful services. They give us the ability to hosting our site to firebase. It's very useful to test our live site. They have a Analytics service that gives us the information how our website is being used by the user and give us a mathematical representation. They have also have Cloud messaging, Cloud, Firestore and Cloud functions.They help us to perform a cross platform service like Android,Ios,Desktop,Web and Game.</p>
            </div>
        </div>
    );
};

export default Blogs;