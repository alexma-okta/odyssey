#!/bin/bash

NODE_VERSION=v16.17.1

# Note: Yarn will automatically switch over to yarn 3 after installing yarn 1.x
YARN_VERSION=1.22.19

echo "installing node ${NODE_VERSION}"

if setup_service node-and-yarn $NODE_VERSION $YARN_VERSION; then
  echo "Installed node ${NODE_VERSION} and yarn $YARN_VERSION successfully"
else
  echo "node ${NODE_VERSION} and yarn $YARN_VERSION installation failed."
fi

cd ${OKTA_HOME}/odyssey

# Override .yarnrc.yml npmRegistryServer with Okta's
export YARN_NPM_REGISTRY_SERVER=${ARTIFACTORY_URL}/api/npm/npm-okta-master

if ! yarn install --immutable; then
  echo "yarn install command failed! Exiting..."
  exit ${FAILED_SETUP}
fi
