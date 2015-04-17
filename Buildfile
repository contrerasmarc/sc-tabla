# ==========================================================================
# Project:   Tabla
# Copyright: @2015 My Company, Inc.
# ==========================================================================

# This is your Buildfile for your app, Tabla. This tells SproutCore
# how to build your app. These settings override those in your project
# Buildfile, which contains default settings for all apps in your project.
#
# To learn more about configuring the Buildfile, please visit
# http://guides.sproutcore.com/build_tools.html.

# It is better to add :required targets here than in the global Buildfile.
# config :tabla, :required => :sproutcore
config :tabla, :required => [ :sproutcore, 'gxtable', 'sproutcore-table' ]
# config :tabla, :required => [ :sproutcore, 'sproutcore-table' ]