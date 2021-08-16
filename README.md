# Thoughts:

For code example purposes I'll minimize framework usage for the actual site, but will obviously use established tooling for build purposes.

Project quick start thoughts:
- jest for unit testing
    * easy to setup/use
    * excellent support and well understood
    * gives code coverage
- cypress.io for e2e tests
    * easy to start
    * visual regression available
- circle-ci for automated build

The requirements state the site should work on tablet, but I'll start mobile first as its easier to scale up.

Also with regards to TDD, I'm happy with that approach, although for practical reasons I won't commit failing tests, but if needed will demonstrate that the tests do in fact verify a behavior and don't simply always pass. My way of working in the real world is often to do tests in batches rather than one at a time, sometimes I'll add comments for test ideas.

I'll likely add both pages (results and product) as it should also allow for a very shallow e2e journey example test.