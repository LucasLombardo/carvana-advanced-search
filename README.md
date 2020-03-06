# Carvana Advanced Search Site

Carvana is an online used vehicle retailer in the US. I love the idea in general and am planning on buying my next car there, but the search UI leaves a lot to be desired.

This project intends to increase filterable fields, and allow for saving advanced searches.

Possible post-mvp features include tracking searches, offline viewing of favorited vehicles (PWA), and integrations with additional services to add aditional information about vehicles.

### MVP User Stories

1. As a user, I want to be able to filter vehicles by the following fields that are already available in the standard Carvana search:

   - price
   - mileage
   - make and model
   - color
   - transmission
   - drive type
   - body type

1. As a user, I want to be able to filter vehicles by additional fields including:

   - car length
   - number of keys
   - number of doors
   - interior color
   - vehicle tags
   - date added to inventory
   - recall status
   - purchase pending status

1. As a user I want to be able to sort by the following fields:

   - date added to inventory
   - price
   - mileage
   - year

1. As a user I want to be able to exclude vehicles from a search based on:

   - make and model
   - color
   - body style

1. As a user I want to be able to sign up for an account and save a search.

1. As a registered user I want to be able to add vehicles to my favorites list and be notified on price and availability changes.

1. As a registered user I want to be able to reset my password if it is forgotten.

1. As a system, I want vehicle inventory to be refreshed daily at a minimum.

### Planned Architecture

**Client:**
Next.js, Material UI, Typescript, Apollo Client, d3?

**Server:**
Koa, GraphQL, Sequelize?, TypeORM and/or TypeGraphql?

**Devops:**
AWS, Docker, Jenkins, Terraform?, ECS?, RDS?

_Disclaimer: This project not affiliated, associated, authorized, endorsed by, or in any way officially connected with Carvana Co., or any of its subsidiaries or its affiliates._
