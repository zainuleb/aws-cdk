#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCdkTsStack } from '../lib/aws-cdk-ts-stack';

const app = new cdk.App();
new AwsCdkTsStack(app, 'AwsCdkTsStack', {});
