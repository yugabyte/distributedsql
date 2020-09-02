export const conferenceSchedule = [
    [
      {
        id: 'm0wo0x',
        speakers: ['KarthikRanganathan'],        
        talk: 'Introduction to YugabyteDB and Its Architecture',
        time: '10 - 10.30 am',        
        start: '2020-09-15T10:00:00-07:00',
        end: '2020-09-15T10:30:00-07:00',
      },
      {
        id: 'to8g75',
        speakers: ['NikhilChandrappa'],
        talk: 'For Developers | 101: Getting started with GraphQL and Distributed SQL',
        time: '10.30 - 11 am',
        start: '2020-09-15T10:30:00-07:00',
        end: '2020-09-15T11:00:00-07:00',
        description: 'This GraphQL workshop explores the use of Distributed SQL database for GraphQL workloads. In this workshop, We\'ll walk you the basics of running GraphQL queries and mutation using Hasura GraphQL engine with YugabyteDB. We will also demo a React application for simulating a realtime vehicle tracking backed by Hasura GraphQL engine and YugabyteDB deployed on Kubernetes.'
      },
      {
        id: 'i8r8vw',
        talk: 'For Developers | 301: Advanced GraphQL + Distributed SQL Topics',
        time: '11 - 11.30 am',
        start: '2020-09-15T11:00:00-07:00',
        end: '2020-09-15T11:30:00-07:00',
      },
      {
        id: 'u9wkps',
        speakers: ['NikhilChandrappa'],
        talk: 'For Developers | Everything Spring Developers Need to Know about Working with Distributed SQL',
        time: '11.30 am - 12 pm',
        start: '2020-09-15T11:30:00-07:00',
        end: '2020-09-15T12:00:00-07:00',
        description: 'In this workshop, we will walk developers through the fundamentals of getting started with Spring Data JPA for accessing relational data in the YugabyteDB cluster. We\'ll be developing a Spring Boot REST application using Spring Data JPA and hibernate ORM for creating Tables and accessing data from the YugabyteDB cluster. And with few configurations changes how developers can switch a Spring Boot application using PostgreSQL database to use YugabyteDB cluster.'
      },
      {
        id: 'p4s49m',
        speakers: ['AlanCaldera'],
        talk: 'For DBAs and Operators | Distributed SQL Security, Encryption, and More',
        time: '12 - 12.30 pm',
        start: '2020-09-15T12:00:00-07:00',
        end: '2020-09-15T12:30:00-07:00',
      },
      {
        id: '5uoky0',
        speakers: ['AmeyBanarse'],
        talk: 'For DBAs and Operators | Yugabyte DB Operator Best Practices',
        time: '12.30 - 1.30 pm',
        start: '2020-09-15T12:30:00-07:00',
        end: '2020-09-15T13:30:00-07:00',
        description: `In this session, Amey Banarse, Principal Data Architect at YugabyteDB walked through an overview of YugabyteDB's architecture and how to apply operational best practices to its administrations. Topics covered included:
        <ul>
            <li>Self-service deployments</li>
            <li>Deployment topologies</li>
            <li>Automation</li>
            <li>Data recoverability</li>
            <li>Config management</li>
            <li>Monitoring & health checks</li>
            <li>Security integration</li>
        </ul>`
      },
      {
        id: 'ydbl3r',
        speakers: ['AlanCaldera'],
        talk: 'Migrating from PostgreSQL to YugabyteDB',
        time: '1.30 - 2 pm',
        start: '2020-09-15T13:30:00-07:00',
        end: '2020-09-15T14:00:00-07:00',
        description: 'In this talk, developers will learn strategies for migrating PostgreSQL to YugabyteDB. We will cover datatype strategies, dealing with serial and sequence numbers, and when to use colocated versus distributed tables.'
      },
      {
        id: 'vc24dm',
        speakers: ['AlanCaldera'],
        talk: 'Migrating from Oracle to YugabyteDB',
        time: '2 - 2.30 pm',
        start: '2020-09-15T14:00:00-07:00',
        end: '2020-09-15T14:30:00-07:00',
      },
      {
        id: 'uf8d9d',
        speakers: ['MikeDenman'],
        talk: 'Migrating from NoSQL to YugabyteDB',
        time: '2.30 - 3 pm',
        start: '2020-09-15T14:30:00-07:00',
        end: '2020-09-15T15:00:00-07:00',
        description: 'In this talk you will learn the various options for migrating NoSQL databases to YugabyteDB incuding lift and shift as well as live migrations with no downtime. Included will be a discussion of the various application design considerations when changing databases.'
      },
    ],
    [
      {
        id: 'zi5xav',
        speakers: ['JoeBeda'],
        talk: 'Kubernetes as a Universal Control Plane',
        time: '10 - 10.30 am',
        start: '2020-09-16T10:00:00-07:00',
        end: '2020-09-16T10:30:00-07:00',
        description: 'In this talk Joe will cover the origins of Kubernetes, its core architecture and how it has evolved beyond containers. Kubernetes is now a distributed systems kernel that is part API gateway, part database and part distributed systems tool kit. We’ll dig into how this applies to the similar evolution of databases into the distributed SQL world.'
      },
      {
        id: 'djhitl',
        speakers: ['MehrdadNurolahzade'],
        talk: 'The Distributed Database Behind Twitter',
        time: '10.30 - 11 am',
        start: '2020-09-16T10:30:00-07:00',
        end: '2020-09-16T11:00:00-07:00',
        description: `Twitter is giving hundreds of millions of people around the world the power to create and share ideas and information instantly without barriers. Operating such a service requires a global database system that can serve millions of queries per second, with extremely low latency in a real-time environment. In this talk we will look at Twitter's distributed database journey from MySQL to Cassandra to Manhattan; what led Twitter to build its own NoSQL database to meet the unique requirements of serving the public conversations; and what challenges are reshaping the future of distributed databases at Twitter.`
      },
      {
        id: 'rgjt2s',
        speakers: ['BreneshStanslasFlowerMary'],
        talk: 'Monolith to Microservices',
        time: '11 - 11.30 am',
        start: '2020-09-16T11:00:00-07:00',
        end: '2020-09-16T11:30:00-07:00',
        description: 'How a large intertwined Mainframe Monolith can be broken down into Microservices in a practical approach. The end-to-end approach covers Wipro’s proprietary “moderniZ” platform which addresses UI, Services and Data Transformation.'
      },
      {
        id: 'p8mjfa',
        speakers: ['HaleDonertasli'],
        talk: '5G and Data Challenges',      
        time: '11.30 am - 12 pm',
        start: '2020-09-16T11:30:00-07:00',
        end: '2020-09-16T12:00:00-07:00',
        description: '5G demands full capacity and availability of data delivery while living in a decade that all layers of connectivity are going through the massive partitioning. In this session, we are going to discuss the strategies to deal with data challenges for 5G.'
      },
      {
        id: 's7zi2b',
        speakers: ['LianghongXu'],
        talk: 'Pinterest’s Exploration of Distributed SQL',
        time: '12 - 12.30 pm',
        start: '2020-09-16T12:00:00-07:00',
        end: '2020-09-16T12:30:00-07:00',
        description: 'Pinterest hosts one of the largest industry deployments of HBase. A number of important storage services were built on top of it, including the in-house key-value store and graph database, serving a huge amount of business critical data. Over the past few years, we have seen an increasing number of customer requests for distributed storage that offers SQL-like features such as distributed transactions and secondary indexing, while achieving scalability of a NoSQL database. To address these requirements, we built dedicated middleware on top of HBase that provide these additional functionalities. This talk presents the evolution of Pinterest’s online storage services (with a focus around HBase), the challenges we face today and our early exploration of a distributed SQL database.'
      },
      {
        id: '0wayh3',
        speakers: ['AllisonKunz'],
        talk: 'Modernizing Application Development with Planet-scale GraphQL & Distributed SQL',
        time: '12.30 - 1 pm',
        start: '2020-09-16T12:30:00-07:00',
        end: '2020-09-16T13:00:00-07:00',
        description: 'Cloud native patterns allow developers to store data and run their compute on global infrastructure, distributed just like their customers. We’ll demonstrate an architecture that combines 2 cutting-edge open source tools - Hasura GraphQL Engine and YugabyteDB distributed resources - to provide a robust, performant, and cost-effective modern API layer with a seamless developer experience.'
      },
      {
        id: 'fuqmyr',
        speakers: ['JamesHartig'],
        talk: 'How Admiral Scales Globally with YugabyteDB on Google Cloud While Maintaining Single-Digit Latency',
        time: '1 - 1.30 pm',
        start: '2020-09-16T13:00:00-07:00',
        end: '2020-09-16T13:30:00-07:00',
        description: 'What if you’re a small company running a SaaS application in the cloud with millions of end users, and you need to scale globally at single-digit latency? Admiral helps online publishers engage with visitors through adblock recovery, paid subscriptions, privacy and consent management, and more. Our dataset is large and complex. The previous NoSQL database couldn’t scale, so we moved to distributed SQL. Our Go application runs in Google Cloud across 5 regions in 3 continents. This geo-distributed architecture is powered by a single YugabyteDB cluster that delivers an average global read latency of 3ms! In this talk, we’ll look at how distributed SQL can be deployed on modern cloud infrastructure to provide a scalable, resilient, low latency, fully consistent data service.'
      },
      {
        id: '14mbp3',
        speakers: ['ChristophPakulski', 'PrasadRadhakrishnan'],
        talk: 'Envoy & Service Mesh for Databases: What the Future Holds',
        time: '1.30 - 2.30 pm',
        start: '2020-09-16T13:30:00-07:00',
        end: '2020-09-16T14:30:00-07:00',
        description: `Service Mesh is a concept and technology that helps with creating, managing, securing, monitoring the network of apps/microservices and the interactions between them. It's new but fairly understood and implemented in all modern cloud-native architectures, platforms and deployments. Is it applicable in the context of App to Database interactions? Postgres proxy filter in Envoy is a significant step in that direction. Prasad from Yugabyte and Christoph from Tetrate are co-presenting their views on this subject.`
      },
      {
        id: 'nn0u9p',
        speakers: ['TobiasMeixner'],
        talk: 'A Migration Journey from Amazon DynamoDB to Yugabyte YSQL and Hasura',
        time: '2.30 - 3 pm',
        start: '2020-09-16T14:30:00-07:00',
        end: '2020-09-16T15:00:00-07:00',
        description: `Switching databases is painful, even more so going from NoSQL to SQL. This talk will give insights into BRIKL's migration path from Apollo Server and Amazon DynamoDB over to Hasura and Yugabyte YSQL, going from a growing monolith to a scalable service-oriented architecture.`
      }
    ],
    [
      {
        id: 'hohbbp',
        speakers: ['JoeHellerstein'],
        talk: 'The Art of the State: Serverless Computing and Distributed Data',
        time: '10 - 10.30 am',
        start: '2020-09-17T10:00:00-07:00',
        end: '2020-09-17T10:30:00-07:00',
        description: `Serverless computing is a first step to opening up the cloud as a programmable platform for developers. As always, the hardest and most interesting part is the data, a topic that is poorly served by first-generation serverless platforms. In this talk I’ll go over the challenges of data management in serverless computing, and promising new results from the Anna KVS and Cloudburst “stateful” serverless computing efforts in Berkeley’s RISELab.`
      },
      {
        id: '6x6zbe',
        speakers: ['PuneetDevadiga', 'HaleDonertasli', 'PrasadRadhakrishnan', 'KartikRallapalli', 'JamesTaylor'],
        talk: 'The Future of Data Infrastructure, A Telco Roundtable',
        time: '10.30 - 11.30 am',
        start: '2020-09-17T10:30:00-07:00',
        end: '2020-09-17T11:30:00-07:00',
        description: `Join this roundtable with technology leaders and innovators from some of the world's most loved enterprises in the telco industry, and explore the future of data infrastructure. A panel of architects will get together to discuss cloud native trends and challenges in the context of Digital, IoT, 5G, Edge, Data and how it fuels their need to innovate.`
      },
      {
        id: '2i7n91',
        speakers: ['MaheshTyagarajan'],
        talk: 'Transforming the Omni-Channel Experience at Kroger',
        time: '11.30 am - 12 pm',
        start: '2020-09-17T11:30:00-07:00',
        end: '2020-09-17T12:00:00-07:00',
        description: `We are evolving the technology stack at Kroger to meet the transformational needs of the business – to become a true omni-channel retailer in the food/grocery space. The technology stack evolves to a cloud native microservices platform which moves from an on-prem ecosystem to a hybrid of on-prem and public cloud infrastructure. Along this journey we are not lifting and shifting but rethinking the entirety of the stack to modern cloud agnostic, cloud native architectures by using an abundance of open source (and COSS), highly scaled shared-nothing components, all based on the foundation of Kubernetes.`
      },
      {
        id: '2nrj9y',
        speakers: ['HudsonClark', 'EthanUberseder'],
        talk: 'Scaling to Billions of Internet Observations per Day',
        time: '12 - 12.30 pm',
        start: '2020-09-17T12:00:00-07:00',
        end: '2020-09-17T12:30:00-07:00',
        description: `A cohesive and queryable model of every device on the Internet lies at the heart of Censys’ products. In order to improve the security of individuals, companies, and government organizations with this data, Censys ingests and processes billions of network handshakes daily. To support the growth of the company, the datastore that backs this model must be resilient to failure and horizontally scalable, while still supporting the more traditional RDBS features demanded by the API. This talk will discuss the unique business and engineering requirements of this particular database system, and how Censys deployed YugabyteDB successfully to meet these demands.`
      },
      {
        talk: 'Coming Soon',
        time: '12.30 - 1 pm',
        start: '2020-09-17T12:30:00-07:00',
        end: '2020-09-17T13:00:00-07:00',
      },
      {
        id: '9c23yp',
        speakers: ['TravisLogan'],
        talk: 'Evolve: A Database Journey from Ground to Cloud',
        time: '1 - 1.30 pm',
        start: '2020-09-17T13:00:00-07:00',
        end: '2020-09-17T13:30:00-07:00',
        description: `With over 14 years of experience with MS SQL Server, Travis is well-versed in database evolution. This talk will start with traditional RDBMS experiences and will lead us through redundancy, scaling, performance and many other trials and tribulations along the way. By the end of the talk, you’ll have explored Travis’ complete evolution from traditional database systems of the past and important milestones that led him to the distributed SQL systems of today.`
      },
      {
        id: 'pxg2y3',
        speakers: ['KenOwens'],
        talk: 'The Data Divide: An End User’s Cloud Native Journey to Distributed Databases',
        time: '1.30 - 2 pm',
        start: '2020-09-17T13:30:00-07:00',
        end: '2020-09-17T14:00:00-07:00',
        description: `The modern cloud native developer is torn today when it comes to managing distributed databases in the platforms or cloud services due to complexity, technology gaps, and data aspects impacted but cloud native principles. This talk will describe the journey Mastercard has undergone, the successes and lessons learned. The attendee will obtain a better understanding about the ever changing opensource and enterprise vendors adoption of cloud native principles and this impact on the strategy and direction to achieve the business objectives.`
      },
      {
        talk: 'Coming Soon',
        time: '2 - 2.30 pm',
        start: '2020-09-17T14:00:00-07:00',
        end: '2020-09-17T14:30:00-07:00',
      },
      {
        id: 'y3hijh',
        speakers: ['KarthikRanganathan'],
        talk: 'Closing Keynote: Distributed SQL Virtual Summit 2020',
        time: '2.30 - 3 pm',
        start: '2020-09-17T14:30:00-07:00',
        end: '2020-09-17T15:00:00-07:00',
        description: 'Closing remarks'
      }
    ]
  ]