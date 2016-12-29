module.exports = function (grunt) {
    'use strict';

    grunt.template.pathing = require('path');

    grunt.initConfig({
        global_root_path: (process.env.ROOT_PATH || '.'),
        pkg: grunt.file.readJSON('package.json'),
        vendor: grunt.file.readJSON('.bowerrc').directory,
        site: grunt.file.readYAML('config/config.yml'),
        bower_deps: grunt.file.readJSON('bower.json').dependencies,
        version: ( process.env.BUILD_VERSION || 'DEV' ),

        smokeTestVariables: {
            url: 'http://localhost:9001/'
        },

        clean: {
            build: ['<%= grunt.template.pathing.normalize(site.dest) %>', './reports/'],
            temp: ['<%= site.postproc %>', './temp']
        },

        jshint: {
            all: ['<%= site.src %>/helpers/*.js', '<%= site.js %>/*.js', 'tasks/lib/**/*.js'],
            options: { jshintrc: '.jshintrc' }
        },

        assemble: {
            options: {
                flatten: true,
                assetsdir: '<%= grunt.template.pathing.normalize(site.assets_root_name) + "/" %>',
                debugMode: '<%= debugMode %>',
                postprocess: require('pretty'),
                env: '<%= environment %>',
                version: '<%= version %>',

                pkg: '<%= pkg %>',
                site: '<%= site %>',
                bower_deps: '<%= bower_deps %>',

                data: ['<%= grunt.template.pathing.join(site.config, "data.json") %>',
                    '<%= grunt.template.pathing.join(site.config, "settings-" + grunt.config("environment"), "data.json") %>'],

                partials: '<%= site.includes %>',
                layoutdir: '<%= site.layouts %>',
                layout: '<%= site.layout %>',

                helpers: '<%= site.helpers %>',
                plugins: '<%= site.plugins %>'
            },

            buy: {
                options: {
                    ext: '',
                    data: ['<%= site.config %>/buy/**/*.json'],
                    partials:['<%=site.includes_dir%>/buy/*.hbs', '<%=site.includes_dir%>/*.hbs']
                },
                files: [
                    {'<%= site.postproc %>/buy': ['<%= site.src %>/buy/*.hbs']}
                ]
            },
            rent: {
                options: {
                    ext: '',
                    data: ['<%= grunt.template.pathing.join(site.config, "rent/**/*.json") %>'],
                    partials: ['<%= grunt.template.pathing.join(site.includes_dir, "rent/*.hbs") %>',
                        '<%= grunt.template.pathing.join(site.includes_dir, "*.hbs") %>']
                },
                files: [
                    {'<%= site.postproc %>/rent': ['<%= site.src %>/rent/*.hbs']}
                ]
            },
            sold: {
                options: {
                    ext: '',
                    data: ['<%= grunt.template.pathing.join(site.config, "sold/**/*.json") %>'],
                    partials: ['<%= grunt.template.pathing.join(site.includes_dir, "sold/*.hbs") %>', '<%= grunt.template.pathing.join(site.includes_dir, "*.hbs") %>']
                },
                files: [
                    {'<%= grunt.template.pathing.join(site.postproc, "sold") %>': ['<%= grunt.template.pathing.join(site.src, "sold/*.hbs") %>']}
                ]
            }
        },

        karma: {
            options: {
                configFile: '<%= grunt.template.pathing.join(site.config, "karma.conf.js") %>',
                singleRun: true
            },
            dev: {},
            ci: {
                colors: false,
                browsers: ['PhantomJS']
            },
            cross: {
                colors: false,
                browsers: ['bs_ie10', 'bs_ipad_3']
            },
            auto: {
                autoWatch: true,
                browsers: ['PhantomJS', 'Chrome'],
                singleRun: false
            }
        },

        copy: {
            debug: {
                files: [
                    {expand: true, cwd: '<%= site.js %>', src: "**/*", dest: '<%= grunt.template.pathing.join(site.dest_assets, "js") %>'},
                    {expand: true, cwd: '<%= site.json %>', src: "**/*", dest: '<%= grunt.template.pathing.join(site.dest_assets, "json") %>'}
                ]
            },
            dev:{
                files: [
                    {expand: true, cwd: '<%= site.json %>', src: "**/*", dest: '<%= grunt.template.pathing.join(site.dest_assets, "json") %>'}
                ]
            },
            assets: {
                files: [
                    {expand: true, cwd: '<%= site.img %>', src: '**/*', dest: '<%= grunt.template.pathing.join(site.postproc_assets, "img") %>'},
                    {expand: true, cwd: '<%= site.src %>/secure-localstorage-update/', src: ['index.html'], dest: '<%= site.postproc_assets %>/secure-localstorage-update/'},
                    {expand: true, cwd: '<%= grunt.template.pathing.join(site.lib, "jparallax/js") %>', src: ['jquery.parallax.js'], dest: '<%= grunt.template.pathing.join(site.postproc_assets, "js", "lib") %>'},
                    {expand: true, cwd: '<%= grunt.template.pathing.join(site.lib, "html5shiv/dist") %>', src: ['html5shiv.js'], dest: '<%= grunt.template.pathing.join(site.postproc_assets, "js", "lib") %>'},
                    {expand: true, cwd: '<%= grunt.template.pathing.join(site.lib, "jquery-placeholder") %>', src: ['jquery.placeholder.min.js'], dest: '<%= grunt.template.pathing.join(site.postproc_assets, "js", "lib") %>'},
                    {expand: true, cwd: '<%= grunt.template.pathing.join(site.lib, "rui-ie-polyfill/dist") %>', src: ['rui-ie-polyfill-all.min.js'], dest: '<%= grunt.template.pathing.join(site.postproc_assets, "js", "lib") %>'},
                    {expand: true, cwd: '<%= grunt.template.pathing.join(site.js, "lib", "analytics") %>', src: ['**/*'], dest: '<%= grunt.template.pathing.join(site.dest_assets, "js", "lib", "analytics") %>'}
                ]
            },
            insertMD5: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= site.postproc %>',
                        src: '**/*',
                        dest: '<%= site.dest %>',
                        filter: 'isFile',
                        rename: function (dest, src) {
                            // Grab the MD5 from the hash and use it to rename the file
                            var md5sums = require('./temp/cachebusters.json');
                            return dest + '/' + md5sums[src];
                        }
                    }
                ]
            }
        },

        uglify: {
            js: {
                files: [
                    {'<%= grunt.template.pathing.join(site.postproc_assets, "js", "lib", "require.min.js") %>': ['lib/requirejs/require.js']},
                    {'<%= grunt.template.pathing.join(site.postproc_assets, "js", "lib", "vendor-package.min.js") %>': [
                        'lib/jquery/jquery.min.js',
                        'lib/rui-browser-tools/dist/rui-browser-tools.js',
                        'lib/rui-advertorial/dist/rui-advertorial-all.js',
                        'lib/rui-core/dist/rui-core.js',
                        'lib/rui-user/dist/rui-user-all.js',
                        'lib/rui-forms/dist/rui-forms-all.js',
                        'lib/rui-callouts/dist/rui-callouts-all.js',
                        'lib/rui-auto-complete/dist/rui-auto-complete-all.js']}
                ]
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '<%= site.postproc %>',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= site.postproc %>'
                }]
            }
        },

        cssmin: {
            rui: {
                files: [{'<%= grunt.template.pathing.join(site.postproc_assets, "css", "lib", "rui-package.min.css") %>':[
                    'lib/rui-advertorial/dist/rui-advertorial-all.css',
                    'lib/rui-core/dist/rui-core.css',
                    'lib/rui-forms/dist/rui-forms-all.css',
                    'lib/rui-callouts/dist/rui-callouts-all.css',
                    'lib/rui-auto-complete/dist/rui-auto-complete-all.css']}
                ]}
        },

        htmlmin: {
            dist: {
                options: {
                    minifyJS: true
                },
                files: {
                    '<%= site.postproc %>/buy': '<%= site.postproc %>/buy',
                    '<%= site.postproc %>/rent': '<%= site.postproc %>/rent',
                    '<%= site.postproc %>/sold': '<%= site.postproc %>/sold'
                }
            }
        },

        requirejs: {
            app: {
                options: {
                    baseUrl: "<%= site.js %>",
                    mainConfigFile: "<%= grunt.template.pathing.join(site.js, 'homepage.js') %>",
                    name: "homepage",
                    out: "<%= grunt.template.pathing.join(site.postproc_assets, 'js', 'homepage.js') %>"
                }
            }
        },

        sass: {
            dist: {
                options: { style: 'compressed', noCache: true },
                files: [
                    { '<%= grunt.template.pathing.join(site.postproc_assets, "css", "homepage.css") %>': '<%= grunt.template.pathing.join(site.scss, "homepage.scss") %>' },
                ]
            }
        },

        watch: {
            site: {
                files: ['Gruntfile.js', '<%= grunt.template.pathing.join(site.src, "**/*") %>', '<%= grunt.template.pathing.join(site.config, "**/*") %>'],
                tasks: ['build']
            }
        },

        shell: {

            tagRelease: {
                command: 'git tag -a v1-<%= version %> -m "Released v<%= version %>" && git push origin v1-<%= version %>',
                options: {
                    failOnError: true
                }
            }
        },

        checkDependencies: {
            npmModules: {
                options: {
                    npmInstall: true
                }
            }
        },

        connect: {
            options: {
                middleware: function (connect, options) {
                    var middlewares = [];
                    middlewares.push(function (req, res, next) {

                        if(req.url === '/') {
                            res.statusCode = 302;
                            res.setHeader('Location', grunt.template.pathing.join(grunt.config('site.root_name'), 'buy'));
                            res.end();
                            return true;
                        }

                        if (req.url.match(/(buy|rent|sold)/)) {
                            res.setHeader('Content-Type', 'text/html');
                        } else {
                            var mime = require('mime');
                            res.setHeader('Content-Type', mime.lookup(req.url));
                        }

                        var fs = require("fs");
                        var filepath = grunt.template.pathing.join('dist', grunt.config('site.root_name'), req._parsedUrl.pathname);
                        if (!fs.existsSync(filepath)) {
                            res.statusCode = 404;
                            res.end();
                            return true;
                        }
                        res.end(fs.readFileSync(filepath))
                    });

                    return middlewares;
                }
            },

            devServer: {
                options: {
                    port: 9004,
                    base: '<%= site.dest %>',
                    hostname: '0.0.0.0'
                }
            },

            testNav: {
                options: {
                    port: 9003,
                    base: '<%= site.dest %>',
                    keepalive: true,
                    hostname: '0.0.0.0',
                    open: {
                        target: 'http://127.0.0.1:9003/<%= grunt.template.pathing.join(site.root_name, "buy") %>',
                        callback: function () {
                            require('dns').lookup(require('os').hostname(), function (err, add, fam) {
                                console.log('To run this on a device use http://' + add + ':9003/' + grunt.template.pathing.join(grunt.config('site.root_name'), "buy"));
                                console.log('press ^C to exit');
                            });
                        }
                    }
                }
            }
        },

        deploy: grunt.file.readJSON('config/environments.json'),

        cachebuster: {
            generate: {
                options: {
                    basedir: '<%= site.postproc %>',
                    formatter: function (hashes) {
                        var output = '{\n';
                        for (var filename in hashes) {

                            output += '"' + filename + '": ';

                            if (filename.match(/(buy|sold|rent|index)(\.html)?$/) === null) {
                                var newfilename = filename.split(".");
                                newfilename.splice(newfilename.length - 1, 0, hashes[filename]);
                                output += '"' + newfilename.join('.') + '",\n';
                            } else {
                                output += '"' + filename + '",\n';
                            }
                        }
                        output = output.substring(0, output.length - 2);
                        output += '\n}\n';
                        return output;
                    }
                },
                src: ['<%= grunt.template.pathing.join(site.postproc, "**/*") %>'],
                dest: 'temp/cachebusters.json'
            }
        },

        replace: {
            insertMD5: {
                options: {
                    force: false
                },
                files: [
                    {
                        cwd: '<%= site.dest %>',
                        src: ['**/*.html', '**/buy', '**/sold', '**/rent', '**/*.css'],
                        expand: true, flatten: false,
                        dest: '<%= site.dest %>'
                    }
                ]
            }
        }
    });

    require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'assemble']});

    grunt.task.loadTasks('./tasks/deploy');
    grunt.task.loadTasks('./tasks/test');

    grunt.registerTask('build', ['environmentContext',
        'clean:build',
        'checkDependencies',
        'compile',
        'sync',
        'cache-bust',
        'clean:temp'
    ]);


    grunt.registerTask('dev', ['build', 'connect:devServer', 'watch:site']);
    grunt.registerTask('test', [ 'jshint', 'karma:dev', 'smoke-test' ]);
    grunt.registerTask('test-ci', ['karma:ci', 'smoke-test' ]);

    grunt.registerTask('cache-bust', ['cachebuster:generate', 'setCacheBusterJSON', 'copy:insertMD5', 'replace:insertMD5']);

    grunt.registerTask('smoke-test', ['build', 'setLocalServerRequired:true', 'runSmokeTests']);

    //For QA purposes
    grunt.registerTask('testNav', ['build', 'connect:testNav']);

    grunt.registerTask('deploy', ['deploySecondary', 'deployMain']);

    grunt.registerTask('default', ['build', 'test']);

    grunt.registerTask('environmentContext', function () {
        grunt.log.write("Package environment " + (process.env.DEPLOY_ENV ? process.env.DEPLOY_ENV : 'dev'));
        grunt.config.set('environment', (process.env.DEPLOY_ENV ? process.env.DEPLOY_ENV : 'dev'));
        if (grunt.option('debugMode')) {
            grunt.config.set('debugMode', true);
        } else {
            grunt.config.set('debugMode', false);
        }
    });

    grunt.registerTask('compile', function () {
        if (!grunt.config('debugMode')) {
            grunt.task.run('jshint');
            grunt.task.run('requirejs');
        }
        if (grunt.config('debugMode')) {
            grunt.task.run('copy:debug');
        }
        if (grunt.config('environment') == "dev") {
            grunt.task.run('copy:dev');
        }
        grunt.task.run('copy:assets');
        grunt.task.run('imagemin');
        grunt.task.run('assemble');
        grunt.task.run('cssmin');
        grunt.task.run('sass');
        grunt.task.run('uglify');
        grunt.task.run('htmlmin');
    });

    grunt.registerTask('setCacheBusterJSON', function () {
        grunt.config('replace.insertMD5.options.patterns', [
            {
                json: grunt.file.readJSON('temp/cachebusters.json')
            }
        ]);
    });

    grunt.registerTask('setLocalServerRequired', function (target) {
        grunt.config('localServerRequired', target);
    });
};