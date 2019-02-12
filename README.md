# Semaphore demo CI/CD pipeline using PHP Laravel

Example application and CI/CD pipeline showing how to run a PHP Laravel project
on Semaphore 2.0.

## Local project setup

To setup the project locally, your local environment needs to meet common
Laravel development requirements, as per [Laravel
Documentation](https://laravel.com/docs/5.7#server-requirements).
We recommend setting up using Vagrant and Homestead, as it is a turn key
solution supported on all major operating systems.

Once the local environment is set up, you can run the following commands:

```
cp .env.example .env // and enter your DB details in the newly created .env
composer install
php artisan key:generate
php artisan migrate
```

## CI/CD on Semaphore

Fork this repository and use it to [create a
project](https://docs.semaphoreci.com/article/63-your-first-project):

```
curl https://storage.googleapis.com/sem-cli-releases/get.sh | bash
sem connect <semaphore-organization-link> <semaphore-id> // found in Semaphore Dashboard
cd <project directory>
sem init
```

After that, push to the repository to trigger a workflow on Semaphore.

The CI pipeline will look like this:

![CI pipeline on Semaphore](public/ci-pipeline.png)

The example pipeline contains 6 blocks:

 - Install Dependencies
    -  installs and caches all composer and npm dependencies
 - Run Code Analysis
    - Runs PHP Mess Detector which as an example is installed as a composer dependency
    - Runs PHP Code Sniffer which as an example is installed as a composer dependency
    - Runs PHP Copy Detector which is called via cURL from the .phar package available online
 - Run Unit Tests
    - Runs PHPUnit Unit Tests
 - Run Browser Tests
    - Runs browser tests through Laravel Dusk.
 - Run Security Tests
    - Runs Sensiolabs security checker pulled in via cURL

## License

Copyright (c) 2019 Rendered Text

Distributed under the MIT License. See the file LICENSE.md.