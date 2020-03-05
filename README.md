# Carvana Advanced Search Site

Carvana is an online used vehicle retailer in the US. I have been an investor in the company for a while and am planning on buying my next car there, but the search UI leaves a lot to be desired.

This project intends to increase filterable fields, allow for saving and tracking searches, and provide details about saved searches or vehicles while offline.

Possible post-mvp features include integrations with additional services and APIs to add aditional information about vehicles.

### User Stories

1. As a user, I want to be able to filter cars by all currently included fields in the carvana search.

1. As a user, I want to be able to filter cars by additional fields including:

   - car length
   - number of keys
   - number of doors
   - interior color
   - vehicle tags
   - date added to inventory
   - recall status
   - purchase pending status

1. As a user I want to be able to sort by date added to inventory.

1. As a user I want to be able to exclude certain brands, models, colors or body styles from a search.

1. As a user I want to be able to sign up for an account and save a search.

1. As a registered user I want to be able to add vehicles to my favorites list and be notified on price and availability changes.

1. As a registered user I want to be able to view only vehicles that have appeared in my searches since I last logged in.

1. As a registered user I want to be able to change my email and password.

1. As a registered user I want to be able to reset my password if it is forgotten.

1. As a system, I want vehicle inventory to be refreshed daily at a minimum.

1. As an admin I want to be able to sign in and view an admin dashboard.

1. As an admin I want the ability to view registerd users, manually refresh the inventory, and view usage statistics.

### Planned Architecture

**Client:**
Next.js, Material UI, Typescript, Apollo Client, d3?

**Server:**
Koa, GraphQL, Sequelize?, TypeORM and/or TypeGraphql?

**Devops:**
AWS, Docker, Jenkins, Terraform?, ECS?, RDS?

_Disclaimer: This project not affiliated, associated, authorized, endorsed by, or in any way officially connected with Carvana Co., or any of its subsidiaries or its affiliates._
