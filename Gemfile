# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) {
    |repo_name| "https://github.com/flavien-hugs/{happyCoding}" }
# gem "rails"
gem "jekyll", ENV['JEKYLL_VERSION'] ? "~>#{ENV['JEKYLL_VERSION']}" : nil

group :jekyll_plugins do
    gem 'jekyll-paginate'
    gem 'jekyll-minifier'
end