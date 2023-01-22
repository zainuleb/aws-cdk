#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsLambdaApigwStack } from '../lib/aws-lambda-apigw-stack';

const app = new cdk.App();
new AwsLambdaApigwStack(app, 'AwsLambdaApigwStack');
