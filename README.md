# IVHQ Technical Interview

This technical test takes the form of a small Jekyll website.

More information about Jekyll is available at https://jekyllrb.com.

Although familiarity with Ruby will be helpful in understanding Jekyll, it is not required.

## Getting Started

### Dependencies

Ensure you have a recent version of [Ruby](https://www.ruby-lang.org/en/) installed. At least 1.9.3, but the latest version is best.

You also need:
* [Bundler](http://bundler.io), a Ruby dependency manager.
* Jekyll

Once you have Ruby installed, you can install these with Rubygems:

    gem install bundler
    gem install jekyll

You can run the site on your machine as follows:

    cd path/to/project

    # Bundle install to install gems. Only necessary the first time,
    # or when you change the gems listed in Gemfile:
    bundle install

    # jekyll serve will generate the site on the fly to `_site`,
    # serve it through a simple HTTP server on localhost:4000, and
    # update the site whenever there are any changes content changes.
    # You will need to manually restart if you change anything in
    # `config.yml`, `_plugins/`, or `_data/`
    jekyll serve


This is also how we will run the site when we're evaluating your work.

## Project structure

This is a fairly simple Jekyll site. See `_layouts` and `_includes` for the various templates, `_assets/css` for a simple .scss file.

You may edit/restructure/change/add/delete any file in these directories as you see fit. There are bits of SCSS and jQuery in this site; if you prefer different tools you may use them instead, so long as they're supported by Jekyll.

`_posts` contains a sample blog/news post. `_destinations` is a collection (https://jekyllrb.com/docs/collections/) of pages each representing a destination. `_projects` is a collection of volunteer projects we have in various locations. Please do not edit these pages.

Assets are managed with `jekyll-assets` (https://github.com/jekyll/jekyll-assets), which will take care (via Sprockets) of compiling SCSS and JSX.

## Tasks

### 1. Add global styling to the site
Use whatever Javascript and CSS frameworks you consider appropriate. You may also use any assets from our current site. We've used placeholder images throughout this project for content images; feel free to continue to use these or replace them. You may reproduce the appearance of our existing site, or create a simplified version of it, or create something new - your choice.

### 2. Focus on the country pages
The individual destination pages (`/destinations/volunteer-in-argentina/` and `/destinations/volunteer-in-thailand/`) are long, and will need the most attention. Make them as usable as you can - use their versions on our existing site (https://www.volunteerhq.org/volunteer-in-argentina, https://www.volunteerhq.org/volunteer-in-thailand) for ideas.

### 3. Improve the fees page with a simple React component
The fees page on our current website (https://www.volunteerhq.org/affordable-volunteer-fees) is long, repetitive and hard to use.

In this project, we've represented it with a list of HTML tables for the 2 countries in the sample. We'd prefer a simple React (https://facebook.github.io/react/) component that allows you to select a country from a dropdown to see its fees. There is a JSON file containing fee information in `/fees.json`. You can use that as a data source, or restructure it as you need to, or create a different data source. The project is already configured to use React, and you may use the empty `_assets/javascripts/fees.js.jsx` file for your code. The fees page already imports React and this file, but you may choose to change how they are included.

### 4. SEO
Add any markup you consider important for search engines. Add data to the Markdown pages if necessary.

## Notes

This project was put together without much consideration for frontend best practices. If you are hired, that will be one of the things we'd like you to bring to the organization. As such, feel free change anything you like about the way this pages are structured.

### Git
We would like to see your working and thought process - please create commits as you go, rather than one big commit at the end.

### Constraints
We'd prefer if you did not change the structure of the various markdown (`.md`) files in the site - particularly the ones in `_projects`, `_posts` and `_destinations`. They represent content that the Marketing department will edit, and so should not be too complex.

