job("Build and push Docker") {
    docker {
        build {}
        push("wevotest.registry.jetbrains.space/p/up-2-task/up2task-containers/hands-on-nuxt") {
            // use current job run number as a tag - '0.0.run_number'
            tags("0.0.\$JB_SPACE_EXECUTION_NUMBER")
            // see example on how to use branch name in a tag
        }
    }
}
