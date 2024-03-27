<div align="left">

[![Visit Workday](./header.png)](https://workday.com)

# [Workday](https://workday.com)<a id="workday"></a>

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`workdaystaffing.promptValues.availableLocations`](#workdaystaffingpromptvaluesavailablelocations)
  * [`workdaystaffing.promptValues.getAssignmentChangeGroupCostCenters`](#workdaystaffingpromptvaluesgetassignmentchangegroupcostcenters)
  * [`workdaystaffing.promptValues.getAssignmentTypes`](#workdaystaffingpromptvaluesgetassignmenttypes)
  * [`workdaystaffing.promptValues.getCompanyInsiderTypes`](#workdaystaffingpromptvaluesgetcompanyinsidertypes)
  * [`workdaystaffing.promptValues.getContingentWorkerTypes`](#workdaystaffingpromptvaluesgetcontingentworkertypes)
  * [`workdaystaffing.promptValues.getCurrencyInstances`](#workdaystaffingpromptvaluesgetcurrencyinstances)
  * [`workdaystaffing.promptValues.getEmployeeTypes`](#workdaystaffingpromptvaluesgetemployeetypes)
  * [`workdaystaffing.promptValues.getGiftInstances`](#workdaystaffingpromptvaluesgetgiftinstances)
  * [`workdaystaffing.promptValues.getGrants`](#workdaystaffingpromptvaluesgetgrants)
  * [`workdaystaffing.promptValues.getInstances`](#workdaystaffingpromptvaluesgetinstances)
  * [`workdaystaffing.promptValues.getInstances_0`](#workdaystaffingpromptvaluesgetinstances_0)
  * [`workdaystaffing.promptValues.getInstances_1`](#workdaystaffingpromptvaluesgetinstances_1)
  * [`workdaystaffing.promptValues.getInstances_10`](#workdaystaffingpromptvaluesgetinstances_10)
  * [`workdaystaffing.promptValues.getInstances_11`](#workdaystaffingpromptvaluesgetinstances_11)
  * [`workdaystaffing.promptValues.getInstances_12`](#workdaystaffingpromptvaluesgetinstances_12)
  * [`workdaystaffing.promptValues.getInstances_13`](#workdaystaffingpromptvaluesgetinstances_13)
  * [`workdaystaffing.promptValues.getInstances_14`](#workdaystaffingpromptvaluesgetinstances_14)
  * [`workdaystaffing.promptValues.getInstances_15`](#workdaystaffingpromptvaluesgetinstances_15)
  * [`workdaystaffing.promptValues.getInstances_16`](#workdaystaffingpromptvaluesgetinstances_16)
  * [`workdaystaffing.promptValues.getInstances_17`](#workdaystaffingpromptvaluesgetinstances_17)
  * [`workdaystaffing.promptValues.getInstances_18`](#workdaystaffingpromptvaluesgetinstances_18)
  * [`workdaystaffing.promptValues.getInstances_19`](#workdaystaffingpromptvaluesgetinstances_19)
  * [`workdaystaffing.promptValues.getInstances_2`](#workdaystaffingpromptvaluesgetinstances_2)
  * [`workdaystaffing.promptValues.getInstances_3`](#workdaystaffingpromptvaluesgetinstances_3)
  * [`workdaystaffing.promptValues.getInstances_4`](#workdaystaffingpromptvaluesgetinstances_4)
  * [`workdaystaffing.promptValues.getInstances_5`](#workdaystaffingpromptvaluesgetinstances_5)
  * [`workdaystaffing.promptValues.getInstances_6`](#workdaystaffingpromptvaluesgetinstances_6)
  * [`workdaystaffing.promptValues.getInstances_7`](#workdaystaffingpromptvaluesgetinstances_7)
  * [`workdaystaffing.promptValues.getInstances_8`](#workdaystaffingpromptvaluesgetinstances_8)
  * [`workdaystaffing.promptValues.getInstances_9`](#workdaystaffingpromptvaluesgetinstances_9)
  * [`workdaystaffing.promptValues.getOptions`](#workdaystaffingpromptvaluesgetoptions)
  * [`workdaystaffing.promptValues.getProposedPositions`](#workdaystaffingpromptvaluesgetproposedpositions)
  * [`workdaystaffing.promptValues.getSupervisoryOrgValues`](#workdaystaffingpromptvaluesgetsupervisoryorgvalues)
  * [`workdaystaffing.promptValues.getTimeTypes`](#workdaystaffingpromptvaluesgettimetypes)
  * [`workdaystaffing.promptValues.getWorkerTypes`](#workdaystaffingpromptvaluesgetworkertypes)
  * [`workdaystaffing.promptValues.getWorkspaceInstances`](#workdaystaffingpromptvaluesgetworkspaceinstances)
  * [`workdaystaffing.jobChanges.getAdminOptions`](#workdaystaffingjobchangesgetadminoptions)
  * [`workdaystaffing.jobChanges.getAdministrativeOptions`](#workdaystaffingjobchangesgetadministrativeoptions)
  * [`workdaystaffing.jobChanges.getBusinessTitle`](#workdaystaffingjobchangesgetbusinesstitle)
  * [`workdaystaffing.jobChanges.getBusinessTitle_0`](#workdaystaffingjobchangesgetbusinesstitle_0)
  * [`workdaystaffing.jobChanges.getById`](#workdaystaffingjobchangesgetbyid)
  * [`workdaystaffing.jobChanges.getCommentById`](#workdaystaffingjobchangesgetcommentbyid)
  * [`workdaystaffing.jobChanges.getCommentInfo`](#workdaystaffingjobchangesgetcommentinfo)
  * [`workdaystaffing.jobChanges.getContractOptions`](#workdaystaffingjobchangesgetcontractoptions)
  * [`workdaystaffing.jobChanges.getContractOptions_0`](#workdaystaffingjobchangesgetcontractoptions_0)
  * [`workdaystaffing.jobChanges.getJobClassification`](#workdaystaffingjobchangesgetjobclassification)
  * [`workdaystaffing.jobChanges.getJobClassification_0`](#workdaystaffingjobchangesgetjobclassification_0)
  * [`workdaystaffing.jobChanges.getJobProfile`](#workdaystaffingjobchangesgetjobprofile)
  * [`workdaystaffing.jobChanges.getLocationInfo`](#workdaystaffingjobchangesgetlocationinfo)
  * [`workdaystaffing.jobChanges.getLocationInfo_0`](#workdaystaffingjobchangesgetlocationinfo_0)
  * [`workdaystaffing.jobChanges.getMoveTeamOption`](#workdaystaffingjobchangesgetmoveteamoption)
  * [`workdaystaffing.jobChanges.getMoveTeamOption_0`](#workdaystaffingjobchangesgetmoveteamoption_0)
  * [`workdaystaffing.jobChanges.getOpeningOptions`](#workdaystaffingjobchangesgetopeningoptions)
  * [`workdaystaffing.jobChanges.getOpeningOptions_0`](#workdaystaffingjobchangesgetopeningoptions_0)
  * [`workdaystaffing.jobChanges.getPositionById`](#workdaystaffingjobchangesgetpositionbyid)
  * [`workdaystaffing.jobChanges.getPositionBySubresourceId`](#workdaystaffingjobchangesgetpositionbysubresourceid)
  * [`workdaystaffing.jobChanges.getProfile`](#workdaystaffingjobchangesgetprofile)
  * [`workdaystaffing.jobChanges.getStartDetails`](#workdaystaffingjobchangesgetstartdetails)
  * [`workdaystaffing.jobChanges.getStartDetails_0`](#workdaystaffingjobchangesgetstartdetails_0)
  * [`workdaystaffing.jobChanges.partialUpdateLocationOptions`](#workdaystaffingjobchangespartialupdatelocationoptions)
  * [`workdaystaffing.jobChanges.partiallyUpdateContractOptions`](#workdaystaffingjobchangespartiallyupdatecontractoptions)
  * [`workdaystaffing.jobChanges.submitChangeJob`](#workdaystaffingjobchangessubmitchangejob)
  * [`workdaystaffing.jobChanges.updateAdministrativeOptions`](#workdaystaffingjobchangesupdateadministrativeoptions)
  * [`workdaystaffing.jobChanges.updateBusinessTitleOptions`](#workdaystaffingjobchangesupdatebusinesstitleoptions)
  * [`workdaystaffing.jobChanges.updateComment`](#workdaystaffingjobchangesupdatecomment)
  * [`workdaystaffing.jobChanges.updateJobClassificationOptions`](#workdaystaffingjobchangesupdatejobclassificationoptions)
  * [`workdaystaffing.jobChanges.updateJobProfileOptions`](#workdaystaffingjobchangesupdatejobprofileoptions)
  * [`workdaystaffing.jobChanges.updateMoveTeamOptions`](#workdaystaffingjobchangesupdatemoveteamoptions)
  * [`workdaystaffing.jobChanges.updateOpeningOptions`](#workdaystaffingjobchangesupdateopeningoptions)
  * [`workdaystaffing.jobChanges.updatePositionOptions`](#workdaystaffingjobchangesupdatepositionoptions)
  * [`workdaystaffing.jobChanges.updateStartDetails`](#workdaystaffingjobchangesupdatestartdetails)
  * [`workdaystaffing.jobFamilies.getById`](#workdaystaffingjobfamiliesgetbyid)
  * [`workdaystaffing.jobFamilies.list`](#workdaystaffingjobfamilieslist)
  * [`workdaystaffing.jobProfiles.getById`](#workdaystaffingjobprofilesgetbyid)
  * [`workdaystaffing.jobProfiles.listCollection`](#workdaystaffingjobprofileslistcollection)
  * [`workdaystaffing.jobs.getCollection`](#workdaystaffingjobsgetcollection)
  * [`workdaystaffing.jobs.getJobById`](#workdaystaffingjobsgetjobbyid)
  * [`workdaystaffing.jobs.getWorkspace`](#workdaystaffingjobsgetworkspace)
  * [`workdaystaffing.jobs.getWorkspaces`](#workdaystaffingjobsgetworkspaces)
  * [`workdaystaffing.organizationAssignmentChanges.createChangeEvent`](#workdaystaffingorganizationassignmentchangescreatechangeevent)
  * [`workdaystaffing.organizationAssignmentChanges.getBusinessUnit`](#workdaystaffingorganizationassignmentchangesgetbusinessunit)
  * [`workdaystaffing.organizationAssignmentChanges.getBusinessUnit_0`](#workdaystaffingorganizationassignmentchangesgetbusinessunit_0)
  * [`workdaystaffing.organizationAssignmentChanges.getComment`](#workdaystaffingorganizationassignmentchangesgetcomment)
  * [`workdaystaffing.organizationAssignmentChanges.getCommentInfo`](#workdaystaffingorganizationassignmentchangesgetcommentinfo)
  * [`workdaystaffing.organizationAssignmentChanges.getCompany`](#workdaystaffingorganizationassignmentchangesgetcompany)
  * [`workdaystaffing.organizationAssignmentChanges.getCompanyById`](#workdaystaffingorganizationassignmentchangesgetcompanybyid)
  * [`workdaystaffing.organizationAssignmentChanges.getCostCenter`](#workdaystaffingorganizationassignmentchangesgetcostcenter)
  * [`workdaystaffing.organizationAssignmentChanges.getCostCenter_0`](#workdaystaffingorganizationassignmentchangesgetcostcenter_0)
  * [`workdaystaffing.organizationAssignmentChanges.getCostingOrganizations`](#workdaystaffingorganizationassignmentchangesgetcostingorganizations)
  * [`workdaystaffing.organizationAssignmentChanges.getCostingOrganizations_0`](#workdaystaffingorganizationassignmentchangesgetcostingorganizations_0)
  * [`workdaystaffing.organizationAssignmentChanges.getCustomOrganizations`](#workdaystaffingorganizationassignmentchangesgetcustomorganizations)
  * [`workdaystaffing.organizationAssignmentChanges.getCustomOrganizations_0`](#workdaystaffingorganizationassignmentchangesgetcustomorganizations_0)
  * [`workdaystaffing.organizationAssignmentChanges.getInstance`](#workdaystaffingorganizationassignmentchangesgetinstance)
  * [`workdaystaffing.organizationAssignmentChanges.getRegion`](#workdaystaffingorganizationassignmentchangesgetregion)
  * [`workdaystaffing.organizationAssignmentChanges.getRegionById`](#workdaystaffingorganizationassignmentchangesgetregionbyid)
  * [`workdaystaffing.organizationAssignmentChanges.getStartDetails`](#workdaystaffingorganizationassignmentchangesgetstartdetails)
  * [`workdaystaffing.organizationAssignmentChanges.getStartDetails_0`](#workdaystaffingorganizationassignmentchangesgetstartdetails_0)
  * [`workdaystaffing.organizationAssignmentChanges.partiallyUpdateCompany`](#workdaystaffingorganizationassignmentchangespartiallyupdatecompany)
  * [`workdaystaffing.organizationAssignmentChanges.partiallyUpdateCostingOptions`](#workdaystaffingorganizationassignmentchangespartiallyupdatecostingoptions)
  * [`workdaystaffing.organizationAssignmentChanges.partiallyUpdateStartDetails`](#workdaystaffingorganizationassignmentchangespartiallyupdatestartdetails)
  * [`workdaystaffing.organizationAssignmentChanges.submitChangeRequest`](#workdaystaffingorganizationassignmentchangessubmitchangerequest)
  * [`workdaystaffing.organizationAssignmentChanges.updateBusinessUnit`](#workdaystaffingorganizationassignmentchangesupdatebusinessunit)
  * [`workdaystaffing.organizationAssignmentChanges.updateComment`](#workdaystaffingorganizationassignmentchangesupdatecomment)
  * [`workdaystaffing.organizationAssignmentChanges.updateCostCenter`](#workdaystaffingorganizationassignmentchangesupdatecostcenter)
  * [`workdaystaffing.organizationAssignmentChanges.updateCustomOrganizations`](#workdaystaffingorganizationassignmentchangesupdatecustomorganizations)
  * [`workdaystaffing.organizationAssignmentChanges.updateRegion`](#workdaystaffingorganizationassignmentchangesupdateregion)
  * [`workdaystaffing.supervisoryOrganizations.getById`](#workdaystaffingsupervisoryorganizationsgetbyid)
  * [`workdaystaffing.supervisoryOrganizations.getInstance`](#workdaystaffingsupervisoryorganizationsgetinstance)
  * [`workdaystaffing.supervisoryOrganizations.getMember`](#workdaystaffingsupervisoryorganizationsgetmember)
  * [`workdaystaffing.supervisoryOrganizations.getMembers`](#workdaystaffingsupervisoryorganizationsgetmembers)
  * [`workdaystaffing.supervisoryOrganizations.getOrgChart`](#workdaystaffingsupervisoryorganizationsgetorgchart)
  * [`workdaystaffing.supervisoryOrganizations.getOrgChart_0`](#workdaystaffingsupervisoryorganizationsgetorgchart_0)
  * [`workdaystaffing.workers.createCheckIn`](#workdaystaffingworkerscreatecheckin)
  * [`workdaystaffing.workers.createCheckInTopic`](#workdaystaffingworkerscreatecheckintopic)
  * [`workdaystaffing.workers.createExternalSkillLevels`](#workdaystaffingworkerscreateexternalskilllevels)
  * [`workdaystaffing.workers.createHomeContactChangeProcess`](#workdaystaffingworkerscreatehomecontactchangeprocess)
  * [`workdaystaffing.workers.createSkillItem`](#workdaystaffingworkerscreateskillitem)
  * [`workdaystaffing.workers.createWorkContactInformationChanges`](#workdaystaffingworkerscreateworkcontactinformationchanges)
  * [`workdaystaffing.workers.deleteCheckIn`](#workdaystaffingworkersdeletecheckin)
  * [`workdaystaffing.workers.deleteCheckInTopic`](#workdaystaffingworkersdeletecheckintopic)
  * [`workdaystaffing.workers.getCheckIn`](#workdaystaffingworkersgetcheckin)
  * [`workdaystaffing.workers.getCheckInTopic`](#workdaystaffingworkersgetcheckintopic)
  * [`workdaystaffing.workers.getCheckInTopics`](#workdaystaffingworkersgetcheckintopics)
  * [`workdaystaffing.workers.getCheckIns`](#workdaystaffingworkersgetcheckins)
  * [`workdaystaffing.workers.getCollectionStaffing`](#workdaystaffingworkersgetcollectionstaffing)
  * [`workdaystaffing.workers.getExplicitSkills`](#workdaystaffingworkersgetexplicitskills)
  * [`workdaystaffing.workers.getExplicitSkillsForSkillEnabled`](#workdaystaffingworkersgetexplicitskillsforskillenabled)
  * [`workdaystaffing.workers.getExternalSkillLevel`](#workdaystaffingworkersgetexternalskilllevel)
  * [`workdaystaffing.workers.getExternalSkillLevels`](#workdaystaffingworkersgetexternalskilllevels)
  * [`workdaystaffing.workers.getHomeContactChange`](#workdaystaffingworkersgethomecontactchange)
  * [`workdaystaffing.workers.getServiceDate`](#workdaystaffingworkersgetservicedate)
  * [`workdaystaffing.workers.getServiceDates`](#workdaystaffingworkersgetservicedates)
  * [`workdaystaffing.workers.getSkillItems`](#workdaystaffingworkersgetskillitems)
  * [`workdaystaffing.workers.getSkillItemsById`](#workdaystaffingworkersgetskillitemsbyid)
  * [`workdaystaffing.workers.getStaffingInformation`](#workdaystaffingworkersgetstaffinginformation)
  * [`workdaystaffing.workers.getWorkContactChange`](#workdaystaffingworkersgetworkcontactchange)
  * [`workdaystaffing.workers.initiateJobChange`](#workdaystaffingworkersinitiatejobchange)
  * [`workdaystaffing.workers.initiateOrganizationAssignmentChange`](#workdaystaffingworkersinitiateorganizationassignmentchange)
  * [`workdaystaffing.workers.partiallyUpdateCheckIn`](#workdaystaffingworkerspartiallyupdatecheckin)
  * [`workdaystaffing.workers.partiallyUpdateCheckInTopic`](#workdaystaffingworkerspartiallyupdatecheckintopic)
  * [`workdaystaffing.workers.saveUserSkills`](#workdaystaffingworkerssaveuserskills)
  * [`workdaystaffing.workers.updateCheckIn`](#workdaystaffingworkersupdatecheckin)
  * [`workdaystaffing.workers.updateCheckInTopicState`](#workdaystaffingworkersupdatecheckintopicstate)
  * [`workdaystaffing.workers.updateExternalSkillLevel`](#workdaystaffingworkersupdateexternalskilllevel)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Workday&serviceName=Staffing&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { WorkdayStaffing } from "workday-staffing-typescript-sdk";

const workdaystaffing = new WorkdayStaffing({
  // Defining the base path is optional and defaults to https://<tenantHostname>/staffing/v6
  // basePath: "https://<tenantHostname>/staffing/v6",
  accessToken: "ACCESS_TOKEN",
});

const availableLocationsResponse =
  await workdaystaffing.promptValues.availableLocations({});

console.log(availableLocationsResponse);
```

## Reference<a id="reference"></a>


### `workdaystaffing.promptValues.availableLocations`<a id="workdaystaffingpromptvaluesavailablelocations"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const availableLocationsResponse =
  await workdaystaffing.promptValues.availableLocations({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/locations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getAssignmentChangeGroupCostCenters`<a id="workdaystaffingpromptvaluesgetassignmentchangegroupcostcenters"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAssignmentChangeGroupCostCentersResponse =
  await workdaystaffing.promptValues.getAssignmentChangeGroupCostCenters({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### event: `string`<a id="event-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### organizationType: `string`<a id="organizationtype-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/organizationAssignmentChangesGroup/costCenters` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getAssignmentTypes`<a id="workdaystaffingpromptvaluesgetassignmenttypes"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAssignmentTypesResponse =
  await workdaystaffing.promptValues.getAssignmentTypes({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/assignmentTypes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getCompanyInsiderTypes`<a id="workdaystaffingpromptvaluesgetcompanyinsidertypes"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompanyInsiderTypesResponse =
  await workdaystaffing.promptValues.getCompanyInsiderTypes({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/companyInsiderTypes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getContingentWorkerTypes`<a id="workdaystaffingpromptvaluesgetcontingentworkertypes"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getContingentWorkerTypesResponse =
  await workdaystaffing.promptValues.getContingentWorkerTypes({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/contingentWorkerTypes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getCurrencyInstances`<a id="workdaystaffingpromptvaluesgetcurrencyinstances"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCurrencyInstancesResponse =
  await workdaystaffing.promptValues.getCurrencyInstances({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/currencies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getEmployeeTypes`<a id="workdaystaffingpromptvaluesgetemployeetypes"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmployeeTypesResponse =
  await workdaystaffing.promptValues.getEmployeeTypes({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/employeeTypes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getGiftInstances`<a id="workdaystaffingpromptvaluesgetgiftinstances"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGiftInstancesResponse =
  await workdaystaffing.promptValues.getGiftInstances({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### event: `string`<a id="event-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### organizationType: `string`<a id="organizationtype-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/organizationAssignmentChangesGroup/gifts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getGrants`<a id="workdaystaffingpromptvaluesgetgrants"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGrantsResponse = await workdaystaffing.promptValues.getGrants({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### event: `string`<a id="event-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### organizationType: `string`<a id="organizationtype-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/organizationAssignmentChangesGroup/grants` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances`<a id="workdaystaffingpromptvaluesgetinstances"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstancesResponse = await workdaystaffing.promptValues.getInstances(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### event: `string`<a id="event-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### organizationType: `string`<a id="organizationtype-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/organizationAssignmentChangesGroup/regions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances_0`<a id="workdaystaffingpromptvaluesgetinstances_0"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_0Response =
  await workdaystaffing.promptValues.getInstances_0({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/reason` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances_1`<a id="workdaystaffingpromptvaluesgetinstances_1"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_1Response =
  await workdaystaffing.promptValues.getInstances_1({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### event: `string`<a id="event-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### organizationType: `string`<a id="organizationtype-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/organizationAssignmentChangesGroup/customs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances_10`<a id="workdaystaffingpromptvaluesgetinstances_10"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_10Response =
  await workdaystaffing.promptValues.getInstances_10({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/templates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances_11`<a id="workdaystaffingpromptvaluesgetinstances_11"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_11Response =
  await workdaystaffing.promptValues.getInstances_11({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/workers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances_12`<a id="workdaystaffingpromptvaluesgetinstances_12"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_12Response =
  await workdaystaffing.promptValues.getInstances_12({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/jobs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances_13`<a id="workdaystaffingpromptvaluesgetinstances_13"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_13Response =
  await workdaystaffing.promptValues.getInstances_13({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### event: `string`<a id="event-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### organizationType: `string`<a id="organizationtype-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/organizationAssignmentChangesGroup/workers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances_14`<a id="workdaystaffingpromptvaluesgetinstances_14"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_14Response =
  await workdaystaffing.promptValues.getInstances_14({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/workStudyAwards` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances_15`<a id="workdaystaffingpromptvaluesgetinstances_15"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_15Response =
  await workdaystaffing.promptValues.getInstances_15({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### event: `string`<a id="event-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### organizationType: `string`<a id="organizationtype-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/organizationAssignmentChangesGroup/positions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances_16`<a id="workdaystaffingpromptvaluesgetinstances_16"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_16Response =
  await workdaystaffing.promptValues.getInstances_16({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/jobRequisitions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances_17`<a id="workdaystaffingpromptvaluesgetinstances_17"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_17Response =
  await workdaystaffing.promptValues.getInstances_17({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/jobProfiles` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances_18`<a id="workdaystaffingpromptvaluesgetinstances_18"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_18Response =
  await workdaystaffing.promptValues.getInstances_18({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### event: `string`<a id="event-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### organizationType: `string`<a id="organizationtype-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/organizationAssignmentChangesGroup/companies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances_19`<a id="workdaystaffingpromptvaluesgetinstances_19"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_19Response =
  await workdaystaffing.promptValues.getInstances_19({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/jobClassifications` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances_2`<a id="workdaystaffingpromptvaluesgetinstances_2"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_2Response =
  await workdaystaffing.promptValues.getInstances_2({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### event: `string`<a id="event-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### organizationType: `string`<a id="organizationtype-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/organizationAssignmentChangesGroup/programs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances_3`<a id="workdaystaffingpromptvaluesgetinstances_3"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_3Response =
  await workdaystaffing.promptValues.getInstances_3({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### event: `string`<a id="event-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### organizationType: `string`<a id="organizationtype-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/organizationAssignmentChangesGroup/jobs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances_4`<a id="workdaystaffingpromptvaluesgetinstances_4"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_4Response =
  await workdaystaffing.promptValues.getInstances_4({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### event: `string`<a id="event-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### organizationType: `string`<a id="organizationtype-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/organizationAssignmentChangesGroup/funds` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances_5`<a id="workdaystaffingpromptvaluesgetinstances_5"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_5Response =
  await workdaystaffing.promptValues.getInstances_5({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/workersCompensationCodeOverrides` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances_6`<a id="workdaystaffingpromptvaluesgetinstances_6"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_6Response =
  await workdaystaffing.promptValues.getInstances_6({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/workShifts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances_7`<a id="workdaystaffingpromptvaluesgetinstances_7"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_7Response =
  await workdaystaffing.promptValues.getInstances_7({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### event: `string`<a id="event-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### organizationType: `string`<a id="organizationtype-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/organizationAssignmentChangesGroup/businessUnits` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances_8`<a id="workdaystaffingpromptvaluesgetinstances_8"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_8Response =
  await workdaystaffing.promptValues.getInstances_8({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/frequencies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getInstances_9`<a id="workdaystaffingpromptvaluesgetinstances_9"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_9Response =
  await workdaystaffing.promptValues.getInstances_9({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/payRateTypes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getOptions`<a id="workdaystaffingpromptvaluesgetoptions"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOptionsResponse = await workdaystaffing.promptValues.getOptions({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/headcountOptions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getProposedPositions`<a id="workdaystaffingpromptvaluesgetproposedpositions"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProposedPositionsResponse =
  await workdaystaffing.promptValues.getProposedPositions({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/proposedPosition` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getSupervisoryOrgValues`<a id="workdaystaffingpromptvaluesgetsupervisoryorgvalues"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSupervisoryOrgValuesResponse =
  await workdaystaffing.promptValues.getSupervisoryOrgValues({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/supervisoryOrganization` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getTimeTypes`<a id="workdaystaffingpromptvaluesgettimetypes"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTimeTypesResponse = await workdaystaffing.promptValues.getTimeTypes(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/timeTypes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getWorkerTypes`<a id="workdaystaffingpromptvaluesgetworkertypes"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkerTypesResponse =
  await workdaystaffing.promptValues.getWorkerTypes({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/workerTypes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.promptValues.getWorkspaceInstances`<a id="workdaystaffingpromptvaluesgetworkspaceinstances"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkspaceInstancesResponse =
  await workdaystaffing.promptValues.getWorkspaceInstances({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveDate: `string | Date`<a id="effectivedate-string--date"></a>

##### job: `string`<a id="job-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### location: `string`<a id="location-string"></a>

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### proposedManager: `string`[]<a id="proposedmanager-string"></a>

##### staffingEvent: `string`<a id="staffingevent-string"></a>

##### worker: `string`<a id="worker-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/jobChangesGroup/workSpaces` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getAdminOptions`<a id="workdaystaffingjobchangesgetadminoptions"></a>

Retrieves the administrative options for the specified job change ID.

The {subResourceID} path parameter must be the same as the {ID} value.

Note that there are no localization constraints in this API version. This method returns the workingFTE and paidFTE fields even if the fields have not been localized.

Secured by: Staffing Actions: Administrator

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAdminOptionsResponse =
  await workdaystaffing.jobChanges.getAdminOptions({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[ChangeJobAdministrativeDetailsDataF8f20079bc5a1000089ccb7f6a8800ea](./models/change-job-administrative-details-data-f8f20079bc5a1000089ccb7f6a8800ea.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/administrative/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getAdministrativeOptions`<a id="workdaystaffingjobchangesgetadministrativeoptions"></a>

Retrieves the administrative options for the specified job change ID.

The {subResourceID} path parameter must be the same as the {ID} value.

Note that there are no localization constraints in this API version. This method returns the workingFTE and paidFTE fields even if the fields have not been localized.

Secured by: Staffing Actions: Administrator

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAdministrativeOptionsResponse =
  await workdaystaffing.jobChanges.getAdministrativeOptions({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[JobChangesGetAdministrativeOptionsResponse](./models/job-changes-get-administrative-options-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/administrative` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getBusinessTitle`<a id="workdaystaffingjobchangesgetbusinesstitle"></a>

Retrieves a business title for the specified specified job change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Actions: Business Title

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBusinessTitleResponse =
  await workdaystaffing.jobChanges.getBusinessTitle({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[ChangeJobBusinessTitle3db8095ffa18100013a5f96969ca0102](./models/change-job-business-title3db8095ffa18100013a5f96969ca0102.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/businessTitle/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getBusinessTitle_0`<a id="workdaystaffingjobchangesgetbusinesstitle_0"></a>

Retrieves a business title for the specified specified job change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Actions: Business Title

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBusinessTitle_0Response =
  await workdaystaffing.jobChanges.getBusinessTitle_0({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[JobChangesGetBusinessTitleResponse](./models/job-changes-get-business-title-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/businessTitle` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getById`<a id="workdaystaffingjobchangesgetbyid"></a>

Retrieves a change job event with the specified ID.

Secured by: Change Job (Mass Action), Change Job (REST Service), Staffing Actions, Staffing Actions: Academic Pay, Staffing Actions: Additional Job Classifications, Staffing Actions: Administrator, Staffing Actions: Attachments, Staffing Actions: Business Title, Staffing Actions: Change Job Date and Reason, Staffing Actions: Compensation for All Job Profiles, Staffing Actions: Contract Details, Staffing Actions: Hire Student, Staffing Actions: Job Profile, Staffing Actions: View \~Worker\~ Start Date Correction

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await workdaystaffing.jobChanges.getById({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

#### 🔄 Return<a id="🔄-return"></a>

[ChangeJobDefaultRepresentation6cc31ee444d010000bb4153a954300e7](./models/change-job-default-representation6cc31ee444d010000bb4153a954300e7.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getCommentById`<a id="workdaystaffingjobchangesgetcommentbyid"></a>

Returns the comment information for the specified job change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Change Job (Mass Action), Change Job (REST Service)

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCommentByIdResponse = await workdaystaffing.jobChanges.getCommentById({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[JobChangesGetCommentByIdResponse](./models/job-changes-get-comment-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/comment` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getCommentInfo`<a id="workdaystaffingjobchangesgetcommentinfo"></a>

Returns the comment information for the specified job change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Change Job (Mass Action), Change Job (REST Service)

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCommentInfoResponse = await workdaystaffing.jobChanges.getCommentInfo({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[Comments7d98fd55aeee100022968e52a1b31c60](./models/comments7d98fd55aeee100022968e52a1b31c60.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/comment/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getContractOptions`<a id="workdaystaffingjobchangesgetcontractoptions"></a>

Returns the contract options for the specified job change ID.

The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Actions: Contract Details

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getContractOptionsResponse =
  await workdaystaffing.jobChanges.getContractOptions({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[JobChangesGetContractOptionsResponse](./models/job-changes-get-contract-options-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/contract` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getContractOptions_0`<a id="workdaystaffingjobchangesgetcontractoptions_0"></a>

Returns the contract options for the specified job change ID.

The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Actions: Contract Details

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getContractOptions_0Response =
  await workdaystaffing.jobChanges.getContractOptions_0({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[ChangeJobContractDetailsData27ec818d10d010000386ce823ac20107](./models/change-job-contract-details-data27ec818d10d010000386ce823ac20107.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/contract/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getJobClassification`<a id="workdaystaffingjobchangesgetjobclassification"></a>

Retrieves a job classification for the specified job change ID.

The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Actions: Additional Job Classifications

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getJobClassificationResponse =
  await workdaystaffing.jobChanges.getJobClassification({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[JobChangesGetJobClassificationResponse](./models/job-changes-get-job-classification-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/jobClassification` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getJobClassification_0`<a id="workdaystaffingjobchangesgetjobclassification_0"></a>

Retrieves a job classification for the specified job change ID.

The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Actions: Additional Job Classifications

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getJobClassification_0Response =
  await workdaystaffing.jobChanges.getJobClassification_0({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[ChangeJobJobClassificationData354103f196361000084489bcb281017f](./models/change-job-job-classification-data354103f196361000084489bcb281017f.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/jobClassification/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getJobProfile`<a id="workdaystaffingjobchangesgetjobprofile"></a>

Retrieves a job profile for the specified job change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Actions: Job Profile

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getJobProfileResponse = await workdaystaffing.jobChanges.getJobProfile({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[JobChangesGetJobProfileResponse](./models/job-changes-get-job-profile-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/jobProfile` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getLocationInfo`<a id="workdaystaffingjobchangesgetlocationinfo"></a>

Returns the location information for the specified job change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Actions: Location

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLocationInfoResponse =
  await workdaystaffing.jobChanges.getLocationInfo({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[JobChangesGetLocationInfoResponse](./models/job-changes-get-location-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/location` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getLocationInfo_0`<a id="workdaystaffingjobchangesgetlocationinfo_0"></a>

Returns the location information for the specified job change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Actions: Location

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLocationInfo_0Response =
  await workdaystaffing.jobChanges.getLocationInfo_0({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[ChangeJobLocation90151d6c4ff110001b4a46091678025c](./models/change-job-location90151d6c4ff110001b4a46091678025c.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/location/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getMoveTeamOption`<a id="workdaystaffingjobchangesgetmoveteamoption"></a>

Retrieves a move team option from the specified job change ID.

The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Actions: Move Manager's Team

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMoveTeamOptionResponse =
  await workdaystaffing.jobChanges.getMoveTeamOption({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[ChangeJobMoveTeamData544fdf5c01da1000238ad82d26d90146](./models/change-job-move-team-data544fdf5c01da1000238ad82d26d90146.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/moveTeam/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getMoveTeamOption_0`<a id="workdaystaffingjobchangesgetmoveteamoption_0"></a>

Retrieves a move team option from the specified job change ID.

The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Actions: Move Manager's Team

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMoveTeamOption_0Response =
  await workdaystaffing.jobChanges.getMoveTeamOption_0({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[JobChangesGetMoveTeamOptionResponse](./models/job-changes-get-move-team-option-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/moveTeam` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getOpeningOptions`<a id="workdaystaffingjobchangesgetopeningoptions"></a>

Retrieves the opening options for the specified job change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Actions: Change Job Date and Reason

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOpeningOptionsResponse =
  await workdaystaffing.jobChanges.getOpeningOptions({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[JobChangesGetOpeningOptionsResponse](./models/job-changes-get-opening-options-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/opening` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getOpeningOptions_0`<a id="workdaystaffingjobchangesgetopeningoptions_0"></a>

Retrieves the opening options for the specified job change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Actions: Change Job Date and Reason

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOpeningOptions_0Response =
  await workdaystaffing.jobChanges.getOpeningOptions_0({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[ChangeJobOpeningData97af9049a5fd10001c4888d654170000](./models/change-job-opening-data97af9049a5fd10001c4888d654170000.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/opening/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getPositionById`<a id="workdaystaffingjobchangesgetpositionbyid"></a>

Retrieves a position for the specified job change ID.

The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Actions: Select or Create Position

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPositionByIdResponse =
  await workdaystaffing.jobChanges.getPositionById({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[JobChangesGetPositionByIdResponse](./models/job-changes-get-position-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/position` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getPositionBySubresourceId`<a id="workdaystaffingjobchangesgetpositionbysubresourceid"></a>

Retrieves a position for the specified job change ID.

The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Actions: Select or Create Position

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPositionBySubresourceIdResponse =
  await workdaystaffing.jobChanges.getPositionBySubresourceId({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[ChangeJobPositionDataDfc4e58f7308100018bd1c459f435221](./models/change-job-position-data-dfc4e58f7308100018bd1c459f435221.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/position/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getProfile`<a id="workdaystaffingjobchangesgetprofile"></a>

Retrieves a job profile for the specified job change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Actions: Job Profile

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProfileResponse = await workdaystaffing.jobChanges.getProfile({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[ChangeJobJobProfileData3db8095ffa18100013f019a27a1f0115](./models/change-job-job-profile-data3db8095ffa18100013f019a27a1f0115.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/jobProfile/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getStartDetails`<a id="workdaystaffingjobchangesgetstartdetails"></a>

Retrieves the start details for the specified job change ID.

Secured by: Staffing Actions: Change Job Date and Reason

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStartDetailsResponse =
  await workdaystaffing.jobChanges.getStartDetails({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[JobChangesStartDetailsDataCe861a6a360d10002d40f176b7180020](./models/job-changes-start-details-data-ce861a6a360d10002d40f176b7180020.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/startDetails/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.getStartDetails_0`<a id="workdaystaffingjobchangesgetstartdetails_0"></a>

Retrieves the start details for the specified job change ID.

Secured by: Staffing Actions: Change Job Date and Reason

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStartDetails_0Response =
  await workdaystaffing.jobChanges.getStartDetails_0({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[JobChangesGetStartDetailsResponse](./models/job-changes-get-start-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/startDetails` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.partialUpdateLocationOptions`<a id="workdaystaffingjobchangespartialupdatelocationoptions"></a>

Partially updates the location options for the specified job change ID. 
The {subResourceID} path parameter must be the same as the {ID} value.

You can call GET /jobChanges/{ID}/location/{subResourceID} to get the existing data to update. 

The same Workday UI validations apply with this PATCH method. The data updates in this PATCH method do not persist until you call POST /jobChanges/{ID}/submit.

In the request body, specify at least this request field: location{id}. 

To retrieve a location ID, you can call the GET /values/jobChangesGroup/locations prompt endpoint, which takes the job change ID as the staffingEvent query parameter. It returns HREF links to locations by location categories for the staffingEvent. You can filter the results by effectiveDate. By default, it returns locations on the current date. 

To retrieve a workShift ID, call the GET /values/jobChangesGroup/workShifts prompt endpoint with the location query parameter. It returns work shifts by location. If you don't specify the location parameter, it returns an empty result.

To retrieve a workSpace ID, call the GET /values/jobChangesGroup/workSpaces prompt endpoint with the location query parameter. It returns HREF links to workspaces by configured prompt categories for the specified location. You can filter the results by effectiveDate. By default, it returns workspaces on the current date.

Secured by: Staffing Actions: Location

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const partialUpdateLocationOptionsResponse =
  await workdaystaffing.jobChanges.partialUpdateLocationOptions({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    scheduledHours: 40,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### location: [`Location90151d6c4ff110001bfa027116820278`](./models/location90151d6c4ff110001bfa027116820278.ts)<a id="location-location90151d6c4ff110001bfa027116820278modelslocation90151d6c4ff110001bfa027116820278ts"></a>

##### scheduledHours: `number`<a id="scheduledhours-number"></a>

The new scheduled hours for the worker as of the effective date.

##### workShift: [`WorkShift0ee7bb8b41db1000143d4e4822174f2e`](./models/work-shift0ee7bb8b41db1000143d4e4822174f2e.ts)<a id="workshift-workshift0ee7bb8b41db1000143d4e4822174f2emodelswork-shift0ee7bb8b41db1000143d4e4822174f2ets"></a>

##### workSpace: [`WorkSpace0ee7bb8b41db10001e7db6a6c3e55663`](./models/work-space0ee7bb8b41db10001e7db6a6c3e55663.ts)<a id="workspace-workspace0ee7bb8b41db10001e7db6a6c3e55663modelswork-space0ee7bb8b41db10001e7db6a6c3e55663ts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ChangeJobLocation90151d6c4ff110001b4a46091678025c](./models/change-job-location90151d6c4ff110001b4a46091678025c.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/location/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.partiallyUpdateContractOptions`<a id="workdaystaffingjobchangespartiallyupdatecontractoptions"></a>

Partially updates the contract details options for the specified job change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

You can call GET /jobChanges/{ID}/contract/{subResourceID} to get the existing data to update. 

The same Workday UI validations apply with this PATCH method. The updates in this PATCH method do not persist until you call POST /jobChanges/{ID}/submit.


To retrieve a frequency ID, call the GET /values/jobChangesGroup/frequencies prompt endpoint, which takes the job change ID as the staffingEvent query parameter. It returns all frequencies based on staffing event for contingent workers. By default, it returns all frequencies in the tenant.

To retrieve a currency ID, call the GET /values/jobChangesGroup/currencies prompt endpoint, which takes the job change ID as the staffingEvent query parameter. If you specify the staffingEvent parameter, it returns HREF links to active currencies by prompt category. By default, it returns all active currencies.

Secured by: Staffing Actions: Contract Details

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const partiallyUpdateContractOptionsResponse =
  await workdaystaffing.jobChanges.partiallyUpdateContractOptions({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    assignmentDetails: "Sample Contract Assignment Details",
    contractEndDate: "2021-01-01T01:00:00.000Z",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### assignmentDetails: `string`<a id="assignmentdetails-string"></a>

The new contract assignment details for the contingent worker as of the effective date.

##### contractEndDate: `string`<a id="contractenddate-string"></a>

The contract end date for the position as of this business process.

##### contractPayRate: `object`<a id="contractpayrate-object"></a>

The new contract pay rate for the contingent worker as of the effective date.

##### currency: [`Currency2d0ca2cb2448100009c54386a8570e07`](./models/currency2d0ca2cb2448100009c54386a8570e07.ts)<a id="currency-currency2d0ca2cb2448100009c54386a8570e07modelscurrency2d0ca2cb2448100009c54386a8570e07ts"></a>

##### frequency: [`Frequency2d0ca2cb2448100009c5436d5d670e06`](./models/frequency2d0ca2cb2448100009c5436d5d670e06.ts)<a id="frequency-frequency2d0ca2cb2448100009c5436d5d670e06modelsfrequency2d0ca2cb2448100009c5436d5d670e06ts"></a>

##### purchaseOrder: [`PurchaseOrder2d0ca2cb2448100009c5433bcff60e05`](./models/purchase-order2d0ca2cb2448100009c5433bcff60e05.ts)<a id="purchaseorder-purchaseorder2d0ca2cb2448100009c5433bcff60e05modelspurchase-order2d0ca2cb2448100009c5433bcff60e05ts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ChangeJobContractDetailsData27ec818d10d010000386ce823ac20107](./models/change-job-contract-details-data27ec818d10d010000386ce823ac20107.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/contract/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.submitChangeJob`<a id="workdaystaffingjobchangessubmitchangejob"></a>

Submits the specified change job ID. 

To submit the Change Job event and initiate the Change Job business process, specify an empty request body: {}.
To save for later, specify this request body:
{
    "businessProcessParameters": {
        "action":{
            "id": "d9e41a8c446c11de98360015c5e6daf6"
        }
    }
}

The action id value is the Workday ID of the "Save for Later" action. If you submit this endpoint with the Save for Later action, you can no longer edit nor resubmit the Change Job event using the REST APIs. The user with correct permissions can edit and submit the saved Change Job event in the Workday UI.

Secured by: Change Job (Mass Action), Change Job (REST Service)

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const submitChangeJobResponse =
  await workdaystaffing.jobChanges.submitChangeJob({
    iD: "iD_example",
    validation: "Sample Validation",
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### businessProcessParameters: [`BusinessProcessParameters5afc0b4b5a4610002aaebb8180cd2261`](./models/business-process-parameters5afc0b4b5a4610002aaebb8180cd2261.ts)<a id="businessprocessparameters-businessprocessparameters5afc0b4b5a4610002aaebb8180cd2261modelsbusiness-process-parameters5afc0b4b5a4610002aaebb8180cd2261ts"></a>

##### status: [`Status54e611eca2c910000fbc4599be0b0112`](./models/status54e611eca2c910000fbc4599be0b0112.ts)<a id="status-status54e611eca2c910000fbc4599be0b0112modelsstatus54e611eca2c910000fbc4599be0b0112ts"></a>

##### validation: `string`<a id="validation-string"></a>

Validation message for an action event triggered by a condition.

##### id: `string`<a id="id-string"></a>

Id of the instance

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

#### 🔄 Return<a id="🔄-return"></a>

[EventState54e611eca2c910000fbc4579181c0111](./models/event-state54e611eca2c910000fbc4579181c0111.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/submit` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.updateAdministrativeOptions`<a id="workdaystaffingjobchangesupdateadministrativeoptions"></a>

Partially updates the administrative options for the specified job change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

You can call GET /jobChanges/{ID}/administrative/{subResourceID} to get the existing data to update. 

The same Workday UI validations apply with this PATCH method. The updates in this PATCH method do not persist until you call POST /jobChanges/{ID}/submit.

Note that there are no localization constraints in this API version. You can update the workingFTE and paidFTE fields even if the fields have not been localized.

To retrieve a positionWorkerType ID, you can call the GET /values/jobChangesGroup/employeeTypes prompt endpoint, with staffingEvent and location query parameters. If you specify the staffingEvent parameter, it returns HREF links to employee types by country. By default, it returns all employee types, excluding contingent workers.

For the positionWorkerType ID, you can also call the GET /values/jobChangesGroup/contingentWorkerTypes prompt endpoint, with staffingEvent and location query parameters. If you specify the staffingEvent parameter, it returns HREF links to contingent worker types for staffing event. If you specify location, it returns HREF links to contingent worker types by location or country. By default, it returns all contingent worker types.

To retrieve a workersCompensationCodeOverride ID, call the GET /values/jobChangesGroup/workersCompensationCodeOverrides prompt endpoint, which takes the job change ID as the staffing Event query parameter. 

To retrieve a payRateType ID, call the GET /values/jobChangesGroup/payRateTypes prompt endpoint, which takes the job change ID as the staffingEvent query parameter. It returns all pay rate types based on staffing event for contingent workers. By default, it returns all pay rate types in the tenant. 

To retrieve companyInsiderType IDs, call the GET /values/jobChangesGroup/companyInsiderTypes prompt endpoint, which returns all company insider types in the tenant. 

To retrieve an assignmentType ID, call the GET /values/jobChangesGroup/assignmentTypes prompt endpoint, which takes the job change ID as the staffingEvent query parameter. If you specify the staffingEvent parameter, it returns assignmentTypes for the staffingEvent. By default, it returns all active assignment types.

To retrieve a workStudy ID, call the GET /values/jobChangesGroup/workStudyAwards prompt endpoint, which takes the job change ID as the staffingEvent query parameter. If you specify the staffingEvent parameter, it returns work study awards for the staffingEvent. By default, it returns all work studies in the tenant.

To retrieve a timeType ID, call the GET /values/jobChangesGroup/timeTypes prompt endpoint, which takes the job change ID as the staffingEvent query parameter. If you specify the staffingEvent parameter, it returns time types for the staffingEvent. By default, it returns all time types based on the Relax Hiring Restrictions tenant configuration.

Secured by: Staffing Actions: Administrator

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAdministrativeOptionsResponse =
  await workdaystaffing.jobChanges.updateAdministrativeOptions({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    fte: 40,
    notifyBy: "2020-01-17T17:00:00.000Z",
    firstDayOfWork: "2020-01-20T16:00:00.000Z",
    defaultWeeklyHours: 40,
    workingFte: 40,
    specifyWorkingFte: true,
    specifyPaidFte: true,
    paidFte: 40,
    endEmploymentDate: "2024-03-23T07:00:00.000Z",
    expectedAssignmentEndDate: "2024-03-23T07:00:00.000Z",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### payRateType: [`PayRateTypeD25283821c01100016756a14eb650000`](./models/pay-rate-type-d25283821c01100016756a14eb650000.ts)<a id="payratetype-payratetyped25283821c01100016756a14eb650000modelspay-rate-type-d25283821c01100016756a14eb650000ts"></a>

##### workersCompensationCodeOverride: [`WorkersCompensationCodeOverride05d4c45042b61000138500e185e0013f`](./models/workers-compensation-code-override05d4c45042b61000138500e185e0013f.ts)<a id="workerscompensationcodeoverride-workerscompensationcodeoverride05d4c45042b61000138500e185e0013fmodelsworkers-compensation-code-override05d4c45042b61000138500e185e0013fts"></a>

##### fte: `number`<a id="fte-number"></a>

Full Time Equivalent for a worker calculated by scheduled weekly hours divided by default weekly hours either current or proposed.

##### notifyBy: `string`<a id="notifyby-string"></a>

Returns the date that the employee should be notified for a termination.

##### companyInsiderTypes: [`ChangeJobCompanyInsiderTypesData05d4c45042b61000131e4b2132f30137`](./models/change-job-company-insider-types-data05d4c45042b61000131e4b2132f30137.ts)[]<a id="companyinsidertypes-changejobcompanyinsidertypesdata05d4c45042b61000131e4b2132f30137modelschange-job-company-insider-types-data05d4c45042b61000131e4b2132f30137ts"></a>

The new company insider types for the worker as of the effective date.

##### firstDayOfWork: `string`<a id="firstdayofwork-string"></a>

The first day of work for the worker, as specified on the Hire, Add International Assignment, or Add Job transaction. This field will not return a value for any other transaction.

##### defaultWeeklyHours: `number`<a id="defaultweeklyhours-number"></a>

The new default weekly hours for the worker as of the effective date.

##### positionWorkerType: [`PositionWorkerType05d4c45042b610001030ee47f2c90118`](./models/position-worker-type05d4c45042b610001030ee47f2c90118.ts)<a id="positionworkertype-positionworkertype05d4c45042b610001030ee47f2c90118modelsposition-worker-type05d4c45042b610001030ee47f2c90118ts"></a>

##### workingFte: `number`<a id="workingfte-number"></a>

The working full time equivalent for the worker as of the effective date.

##### specifyWorkingFte: `boolean`<a id="specifyworkingfte-boolean"></a>

True if working full time equivalent is specified on a worker as of the effective date.

##### timeType: [`TimeType05d4c45042b610000bb540b7458e0108`](./models/time-type05d4c45042b610000bb540b7458e0108.ts)<a id="timetype-timetype05d4c45042b610000bb540b7458e0108modelstime-type05d4c45042b610000bb540b7458e0108ts"></a>

##### specifyPaidFte: `boolean`<a id="specifypaidfte-boolean"></a>

True if paid full time equivalent is specified on a worker as of the effective date.

##### paidFte: `number`<a id="paidfte-number"></a>

The paid full time equivalent for the worker as of the effective date.

##### workStudy: [`WorkStudy05d4c45042b610000ba2f83c70f30101`](./models/work-study05d4c45042b610000ba2f83c70f30101.ts)<a id="workstudy-workstudy05d4c45042b610000ba2f83c70f30101modelswork-study05d4c45042b610000ba2f83c70f30101ts"></a>

##### assignmentType: [`AssignmentType23929e1f68ca10000d6940d6bde56963`](./models/assignment-type23929e1f68ca10000d6940d6bde56963.ts)<a id="assignmenttype-assignmenttype23929e1f68ca10000d6940d6bde56963modelsassignment-type23929e1f68ca10000d6940d6bde56963ts"></a>

##### endEmploymentDate: `string`<a id="endemploymentdate-string"></a>

The new End Employment Date for the worker. If the worker has an Employee Contract sub event, this field will return that end date instead.

##### expectedAssignmentEndDate: `string`<a id="expectedassignmentenddate-string"></a>

For a past or current business process, the value of the Expected Assignment End Date field that is being (or was) proposed in the process.

#### 🔄 Return<a id="🔄-return"></a>

[ChangeJobAdministrativeDetailsDataF8f20079bc5a1000089ccb7f6a8800ea](./models/change-job-administrative-details-data-f8f20079bc5a1000089ccb7f6a8800ea.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/administrative/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.updateBusinessTitleOptions`<a id="workdaystaffingjobchangesupdatebusinesstitleoptions"></a>

Partially updates the businessTitle options for the specified change job ID.

The {subResourceID} path parameter must be the same as the {ID} value.

You can call GET /jobChanges/{ID}/businessTitle/{subResourceID} to get the existing data to update. 

The same Workday UI validations apply with this PATCH method. The updates in this PATCH method do not persist until you call POST /jobChanges/{ID}/submit.

Secured by: Staffing Actions: Business Title

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBusinessTitleOptionsResponse =
  await workdaystaffing.jobChanges.updateBusinessTitleOptions({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    businessTitle: "Sample Business Title",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### businessTitle: `string`<a id="businesstitle-string"></a>

The new business title for the worker as of the effective date.  If there is no business title override, this field defaults to the job title or job profile name.

#### 🔄 Return<a id="🔄-return"></a>

[ChangeJobBusinessTitle3db8095ffa18100013a5f96969ca0102](./models/change-job-business-title3db8095ffa18100013a5f96969ca0102.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/businessTitle/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.updateComment`<a id="workdaystaffingjobchangesupdatecomment"></a>

Updates the comment for the specified change job ID.
The {subResourceID} path parameter must be the same as the {ID} value.

The data updates in this PATCH method do not persist until you call POST /jobChanges/{ID}/submit.

You can call GET /jobChanges/{ID}/comment/{subResourceID} to get the existing data to update.

Secured by: Change Job (Mass Action), Change Job (REST Service)

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCommentResponse = await workdaystaffing.jobChanges.updateComment({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
  comment:
    "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### comment: `string`<a id="comment-string"></a>

The business process comment for a worker event before it\\\'s submitted.

#### 🔄 Return<a id="🔄-return"></a>

[Comments7d98fd55aeee100022968e52a1b31c60](./models/comments7d98fd55aeee100022968e52a1b31c60.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/comment/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.updateJobClassificationOptions`<a id="workdaystaffingjobchangesupdatejobclassificationoptions"></a>

Partially updates the job classifications for the specified job change ID. 
The {subResourceID} path parameter must be the same as the {ID} value.

You can call GET /jobChanges/{ID}/jobClassification/{subResourceID} to get the existing data to update. 

The same Workday UI validations apply with this PATCH method. The updates in this PATCH method do not persist until you call POST /jobChanges/{ID}/submit.

In the request body, specify at least this required field: additionalJobClassifications[ {id} ]. 

To retrieve an additionalJobClassifications ID, call the GET /values/jobChangesGroup/jobClassifications prompt endpoint with the location and/or staffingEvent query parameter. It returns HREF links to job classifications by location for the staffing event. It returns an empty result if both location and staffingEvent are not specified. You can filter the results by effectiveDate. By default, it returns job classifications on the current date.

Secured by: Staffing Actions: Additional Job Classifications

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateJobClassificationOptionsResponse =
  await workdaystaffing.jobChanges.updateJobClassificationOptions({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### additionalJobClassifications: [`ChangeJobAdditionalJobClassificationData27ec818d10d0100003600115b5200102`](./models/change-job-additional-job-classification-data27ec818d10d0100003600115b5200102.ts)[]<a id="additionaljobclassifications-changejobadditionaljobclassificationdata27ec818d10d0100003600115b5200102modelschange-job-additional-job-classification-data27ec818d10d0100003600115b5200102ts"></a>

Additional Job Classifications Proposed By Staffing Event

#### 🔄 Return<a id="🔄-return"></a>

[ChangeJobJobClassificationData354103f196361000084489bcb281017f](./models/change-job-job-classification-data354103f196361000084489bcb281017f.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/jobClassification/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.updateJobProfileOptions`<a id="workdaystaffingjobchangesupdatejobprofileoptions"></a>

Partially updates the job profile options for the specified job change ID.

The {subResourceID} path parameter must be the same as the {ID} value.

You can call GET /jobChanges/{ID}/jobProfile/{subResourceID} to get the existing data to update.

The same Workday UI validations apply with this PATCH method. The updates in this PATCH method do not persist until you call POST /jobChanges/{ID}/submit.

In the request body, specify at least this required field: jobProfile{id}

To retrieve a jobProfile ID, call the GET /values/jobChangesGroup/jobProfiles prompt endpoint, which takes the job change ID as the staffingEvent query parameter. If you specify the staffingEvent parameter, it returns HREF links to the job profiles by the prompt category. If you don't specify the staffingEvent parameter, it returns all job profiles, regardless of their categories. You can also filter the job profiles by the effectiveDate query parameter. The default is the current date.

Secured by: Staffing Actions: Job Profile

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateJobProfileOptionsResponse =
  await workdaystaffing.jobChanges.updateJobProfileOptions({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    jobTitle: "Sample Job Title",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### jobProfile: [`JobProfile3db8095ffa18100013f019afc6d30116`](./models/job-profile3db8095ffa18100013f019afc6d30116.ts)<a id="jobprofile-jobprofile3db8095ffa18100013f019afc6d30116modelsjob-profile3db8095ffa18100013f019afc6d30116ts"></a>

##### jobTitle: `string`<a id="jobtitle-string"></a>

The new job title for the worker as of the effective date.

#### 🔄 Return<a id="🔄-return"></a>

[ChangeJobJobProfileData3db8095ffa18100013f019a27a1f0115](./models/change-job-job-profile-data3db8095ffa18100013f019a27a1f0115.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/jobProfile/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.updateMoveTeamOptions`<a id="workdaystaffingjobchangesupdatemoveteamoptions"></a>

Partially updates the moveTeam options for the specified change job ID.

The {subResourceID} path parameter must be the same as the {ID} value.

You can call GET /jobChanges/{ID}/moveTeam/{subResourceID} to get the existing data to update. 

The same Workday UI validations apply with this PATCH method. The updates in this PATCH method do not persist until you call POST /jobChanges/{ID}/submit.

Secured by: Staffing Actions: Move Manager's Team

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMoveTeamOptionsResponse =
  await workdaystaffing.jobChanges.updateMoveTeamOptions({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    moveTeam: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### moveTeam: `boolean`<a id="moveteam-boolean"></a>

Returns a boolean that indicates whether teams reporting to the Manager moved with them during the Change Job Event.

#### 🔄 Return<a id="🔄-return"></a>

[ChangeJobMoveTeamData544fdf5c01da1000238ad82d26d90146](./models/change-job-move-team-data544fdf5c01da1000238ad82d26d90146.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/moveTeam/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.updateOpeningOptions`<a id="workdaystaffingjobchangesupdateopeningoptions"></a>

Partially updates the opening options for the specified job change ID. 
The {subResourceID} path parameter must be the same as the {ID} value.

You can call GET /jobChanges/{ID}/opening/{subResourceID} to get the existing data to update. 

The same Workday UI validations apply with this PATCH method. The updates in this PATCH method do not persist until you call POST /jobChanges/{ID}/submit.

In the request body, specify at least this required field: headcountOption{id} 

To retrieve a headcountOption ID, call the GET /values/jobChangesGroup/headcountOptions prompt endpoint, which takes the job change ID as the staffingEvent query parameter. By default, it returns all headcount options.

Secured by: Staffing Actions: Change Job Date and Reason

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOpeningOptionsResponse =
  await workdaystaffing.jobChanges.updateOpeningOptions({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    openingAvailableForOverlap: true,
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### headcountOption: [`HeadcountOption97af9049a5fd10001c48896fbde30000`](./models/headcount-option97af9049a5fd10001c48896fbde30000.ts)<a id="headcountoption-headcountoption97af9049a5fd10001c48896fbde30000modelsheadcount-option97af9049a5fd10001c48896fbde30000ts"></a>

##### openingAvailableForOverlap: `boolean`<a id="openingavailableforoverlap-boolean"></a>

Returns true if the value for \\\'Available for job overlap\\\' box is checked

##### id: `string`<a id="id-string"></a>

Id of the instance

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

#### 🔄 Return<a id="🔄-return"></a>

[ChangeJobOpeningData97af9049a5fd10001c4888d654170000](./models/change-job-opening-data97af9049a5fd10001c4888d654170000.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/opening/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.updatePositionOptions`<a id="workdaystaffingjobchangesupdatepositionoptions"></a>

Partially updates the position options for the specified job change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

You can call GET /jobChanges/{ID}/startDetails/{subResourceID} to get the existing data to update. 

The same Workday UI validations apply with this PATCH method. The updates in this PATCH method do not persist until you call POST /jobChanges/{ID}/submit.

In the request body, specify at least these request fields: position{id}, createPosition, closePosition, availableForOverlap

To retrieve a position ID, call the GET /values/jobChangesGroup/proposedPosition prompt endpoint, which takes the job change ID as the staffingEvent query parameter. It returns HREF links to proposed positions based on staffing event for contingent workers. You can filter the results by effectiveDate. By default, it returns all proposed positions on current date.

Secured by: Staffing Actions: Select or Create Position

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePositionOptionsResponse =
  await workdaystaffing.jobChanges.updatePositionOptions({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    createPosition: true,
    availableForOverlap: true,
    closePosition: true,
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### createPosition: `boolean`<a id="createposition-boolean"></a>

Returns true if the position is being created.

##### availableForOverlap: `boolean`<a id="availableforoverlap-boolean"></a>

Returns true if the value for \\\'Available for job overlap\\\' box is checked

##### position: [`PositionDfc4e58f730810001ad60369c23452d1`](./models/position-dfc4e58f730810001ad60369c23452d1.ts)<a id="position-positiondfc4e58f730810001ad60369c23452d1modelsposition-dfc4e58f730810001ad60369c23452d1ts"></a>

##### closePosition: `boolean`<a id="closeposition-boolean"></a>

Returns true if the position is being closed.

##### jobRequisition: [`JobRequisitionDfc4e58f730810001ad60325d9bc52cf`](./models/job-requisition-dfc4e58f730810001ad60325d9bc52cf.ts)<a id="jobrequisition-jobrequisitiondfc4e58f730810001ad60325d9bc52cfmodelsjob-requisition-dfc4e58f730810001ad60325d9bc52cfts"></a>

##### id: `string`<a id="id-string"></a>

Id of the instance

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

#### 🔄 Return<a id="🔄-return"></a>

[ChangeJobPositionDataDfc4e58f7308100018bd1c459f435221](./models/change-job-position-data-dfc4e58f7308100018bd1c459f435221.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/position/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobChanges.updateStartDetails`<a id="workdaystaffingjobchangesupdatestartdetails"></a>

Partially updates the start details for the specified job change ID. 
The {subResourceID} path parameter must be the same as the {ID} value.

You can call GET /jobChanges/{ID}/startDetails/{subResourceID} to get the existing data to update. 

The same Workday UI validations apply with this PATCH method. The updates in this PATCH method do not persist until you call POST /jobChanges/{ID}/submit.

In the request body, specify at least these request fields: date, reason{id}. 

To retrieve a reason ID, call the GET /values/jobChangesGroup/reason prompt endpoint, which takes the job change ID as the staffingEvent query parameter. If you specify the staffingEvent parameter, it returns change job reasons for the staffingEvent, by the change job category. By default, it returns all change job categories and reasons.

Secured by: Staffing Actions: Change Job Date and Reason

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateStartDetailsResponse =
  await workdaystaffing.jobChanges.updateStartDetails({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    useNextPayPeriod: true,
    date: "2020-01-18T01:00:00.000Z",
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### worker: [`Worker271bbd673582100010110b9f9a6d99e1`](./models/worker271bbd673582100010110b9f9a6d99e1.ts)<a id="worker-worker271bbd673582100010110b9f9a6d99e1modelsworker271bbd673582100010110b9f9a6d99e1ts"></a>

##### useNextPayPeriod: `boolean`<a id="usenextpayperiod-boolean"></a>

Next Pay Period?

##### template: [`Template2b1b95dfe4af100009f30dc769a31686`](./models/template2b1b95dfe4af100009f30dc769a31686.ts)<a id="template-template2b1b95dfe4af100009f30dc769a31686modelstemplate2b1b95dfe4af100009f30dc769a31686ts"></a>

##### job: [`Job35b8f199c29410002508ffd7ad6101f3`](./models/job35b8f199c29410002508ffd7ad6101f3.ts)<a id="job-job35b8f199c29410002508ffd7ad6101f3modelsjob35b8f199c29410002508ffd7ad6101f3ts"></a>

##### date: `string`<a id="date-string"></a>

The date this business process takes effect.

##### location: [`Location6da81665c26510001fc6b1d42fae5f7b`](./models/location6da81665c26510001fc6b1d42fae5f7b.ts)<a id="location-location6da81665c26510001fc6b1d42fae5f7bmodelslocation6da81665c26510001fc6b1d42fae5f7bts"></a>

##### reason: [`Reason6da81665c26510001f34d0a154765e9b`](./models/reason6da81665c26510001f34d0a154765e9b.ts)<a id="reason-reason6da81665c26510001f34d0a154765e9bmodelsreason6da81665c26510001f34d0a154765e9bts"></a>

##### supervisoryOrganization: [`SupervisoryOrganizationE3267ea37e6f100032c00c34a99e74d8`](./models/supervisory-organization-e3267ea37e6f100032c00c34a99e74d8.ts)<a id="supervisoryorganization-supervisoryorganizatione3267ea37e6f100032c00c34a99e74d8modelssupervisory-organization-e3267ea37e6f100032c00c34a99e74d8ts"></a>

##### id: `string`<a id="id-string"></a>

Id of the instance

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

#### 🔄 Return<a id="🔄-return"></a>

[JobChangesStartDetailsDataCe861a6a360d10002d40f176b7180020](./models/job-changes-start-details-data-ce861a6a360d10002d40f176b7180020.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobChanges/{ID}/startDetails/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobFamilies.getById`<a id="workdaystaffingjobfamiliesgetbyid"></a>

Retrieves a job family with the specified ID.

Secured by: Job Information

Scope: Jobs & Positions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await workdaystaffing.jobFamilies.getById({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

#### 🔄 Return<a id="🔄-return"></a>

[JobFamilyView51ed1475e9e6100005d10fcedc5a000a](./models/job-family-view51ed1475e9e6100005d10fcedc5a000a.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobFamilies/{ID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobFamilies.list`<a id="workdaystaffingjobfamilieslist"></a>

Retrieves a collection of job families.

Secured by: Job Information

Scope: Jobs & Positions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await workdaystaffing.jobFamilies.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### inactive: `boolean`<a id="inactive-boolean"></a>

If true, the method returns inactive job families. Default is false.

##### jobFamilyGroup: `string`[]<a id="jobfamilygroup-string"></a>

The job family group for the job family. You can specify more than 1 jobFamilyGroup query parameter.

##### jobProfile: `string`[]<a id="jobprofile-string"></a>

The job profile for the job family. You can specify more than 1 jobFamilyGroup query parameter. For possible values, you can use a returned id from GET /jobProfiles.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[JobFamiliesListResponse](./models/job-families-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobFamilies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobProfiles.getById`<a id="workdaystaffingjobprofilesgetbyid"></a>

Retrieves a job profile with the specified ID.

Secured by: Job Profile: View, Public Job: View

Scope: Jobs & Positions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await workdaystaffing.jobProfiles.getById({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

#### 🔄 Return<a id="🔄-return"></a>

[JobProfileDetailView7deab99f645f10000bd5e61a1b780041](./models/job-profile-detail-view7deab99f645f10000bd5e61a1b780041.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobProfiles/{ID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobProfiles.listCollection`<a id="workdaystaffingjobprofileslistcollection"></a>

Retrieves a collection of job profiles.

Secured by: Job Profile: View, Public Job: View

Scope: Jobs & Positions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCollectionResponse = await workdaystaffing.jobProfiles.listCollection(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### includeInactive: `boolean`<a id="includeinactive-boolean"></a>

If true, the method returns inactive job profiles. Default is false.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[JobProfilesListCollectionResponse](./models/job-profiles-list-collection-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobProfiles` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobs.getCollection`<a id="workdaystaffingjobsgetcollection"></a>

Retrieves a collection of jobs.

Secured by: Worker Position: View

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCollectionResponse = await workdaystaffing.jobs.getCollection({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[JobsGetCollectionResponse](./models/jobs-get-collection-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobs.getJobById`<a id="workdaystaffingjobsgetjobbyid"></a>

Retrieves a job with the specified job ID.

Secured by: Worker Position: View

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getJobByIdResponse = await workdaystaffing.jobs.getJobById({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

#### 🔄 Return<a id="🔄-return"></a>

[JobData1bfa8925c50510000ae4479925510026](./models/job-data1bfa8925c50510000ae4479925510026.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobs/{ID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobs.getWorkspace`<a id="workdaystaffingjobsgetworkspace"></a>

Retrieves a single workspace for the specified job ID.

Secured by: Worker Data: Public Worker Reports

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkspaceResponse = await workdaystaffing.jobs.getWorkspace({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[JobWorkspaceData1005157e3d631000144205466a6c13d3](./models/job-workspace-data1005157e3d631000144205466a6c13d3.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobs/{ID}/workspace/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.jobs.getWorkspaces`<a id="workdaystaffingjobsgetworkspaces"></a>

Retrieves a collection of workspaces for the specified job ID.

Secured by: Worker Data: Public Worker Reports

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkspacesResponse = await workdaystaffing.jobs.getWorkspaces({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[JobsGetWorkspacesResponse](./models/jobs-get-workspaces-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobs/{ID}/workspace` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.createChangeEvent`<a id="workdaystaffingorganizationassignmentchangescreatechangeevent"></a>

Creates a new change organization assignment event for a specific filled or unfilled position, which returns a new change organization assignment ID. Specify the new ID in subsequent requests that update or get information about the change organization assignment event.

In the request body, specify at least this required field: date, job {id}."

Secured by: Change Organization Assignment (REST)

Scope: Organizations and Roles

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createChangeEventResponse =
  await workdaystaffing.organizationAssignmentChanges.createChangeEvent({
    position: null,
    date: "2024-03-23T07:00:00.000Z",
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### position: [`PositionCf97466f96d9100029bffcf91c120001`](./models/position-cf97466f96d9100029bffcf91c120001.ts)<a id="position-positioncf97466f96d9100029bffcf91c120001modelsposition-cf97466f96d9100029bffcf91c120001ts"></a>

##### massActionWorksheet: [`MassActionWorksheet31485c9a93c0100007276cf4e5640000`](./models/mass-action-worksheet31485c9a93c0100007276cf4e5640000.ts)<a id="massactionworksheet-massactionworksheet31485c9a93c0100007276cf4e5640000modelsmass-action-worksheet31485c9a93c0100007276cf4e5640000ts"></a>

##### massActionHeader: [`MassActionHeaderCf97466f96d910002bd32afbf0000001`](./models/mass-action-header-cf97466f96d910002bd32afbf0000001.ts)<a id="massactionheader-massactionheadercf97466f96d910002bd32afbf0000001modelsmass-action-header-cf97466f96d910002bd32afbf0000001ts"></a>

##### date: `string`<a id="date-string"></a>

The effective date of the business process event using the yyyy-mm-dd format.

##### id: `string`<a id="id-string"></a>

Id of the instance

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesPostPositionCf97466f96d9100029bffcf91c120000](./models/organization-assignment-changes-post-position-cf97466f96d9100029bffcf91c120000.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.getBusinessUnit`<a id="workdaystaffingorganizationassignmentchangesgetbusinessunit"></a>

Retrieves a business unit for the specified organization assignment change ID. 
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Organizations: Business Unit

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBusinessUnitResponse =
  await workdaystaffing.organizationAssignmentChanges.getBusinessUnit({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesBusinessUnitData5aabf8e28cb310002520b2a2b31d0365](./models/organization-assignment-changes-business-unit-data5aabf8e28cb310002520b2a2b31d0365.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/businessUnit/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.getBusinessUnit_0`<a id="workdaystaffingorganizationassignmentchangesgetbusinessunit_0"></a>

Retrieves a business unit for the specified organization assignment change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Organizations: Business Unit

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBusinessUnit_0Response =
  await workdaystaffing.organizationAssignmentChanges.getBusinessUnit_0({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesGetBusinessUnitResponse](./models/organization-assignment-changes-get-business-unit-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/businessUnit` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.getComment`<a id="workdaystaffingorganizationassignmentchangesgetcomment"></a>

Retrieves the comment information for the specified organization assignment change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Change Organization Assignment (REST), Change Organization Assignments for  \~Worker\~ (Mass Action)

Scope: Organizations and Roles

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCommentResponse =
  await workdaystaffing.organizationAssignmentChanges.getComment({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesGetCommentResponse](./models/organization-assignment-changes-get-comment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/comment` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.getCommentInfo`<a id="workdaystaffingorganizationassignmentchangesgetcommentinfo"></a>

Retrieves the comment information for the specified organization assignment change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Change Organization Assignment (REST), Change Organization Assignments for  \~Worker\~ (Mass Action)

Scope: Organizations and Roles

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCommentInfoResponse =
  await workdaystaffing.organizationAssignmentChanges.getCommentInfo({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[Comments7d98fd55aeee100022968e52a1b31c60](./models/comments7d98fd55aeee100022968e52a1b31c60.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/comment/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.getCompany`<a id="workdaystaffingorganizationassignmentchangesgetcompany"></a>

Retrieves a company for the specified organization assignment change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Organizations: Company

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompanyResponse =
  await workdaystaffing.organizationAssignmentChanges.getCompany({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesGetCompanyResponse](./models/organization-assignment-changes-get-company-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/company` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.getCompanyById`<a id="workdaystaffingorganizationassignmentchangesgetcompanybyid"></a>

Retrieves a company for the specified organization assignment change ID. 
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Organizations: Company

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompanyByIdResponse =
  await workdaystaffing.organizationAssignmentChanges.getCompanyById({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesCompanyData652d516fdff41000086e0b9c96950354](./models/organization-assignment-changes-company-data652d516fdff41000086e0b9c96950354.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/company/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.getCostCenter`<a id="workdaystaffingorganizationassignmentchangesgetcostcenter"></a>

Retrieves a cost center for the specified organization assignment change ID. 
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Organizations: Cost Center

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCostCenterResponse =
  await workdaystaffing.organizationAssignmentChanges.getCostCenter({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesCostCenterData5aabf8e28cb3100010a999db2700024e](./models/organization-assignment-changes-cost-center-data5aabf8e28cb3100010a999db2700024e.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/costCenter/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.getCostCenter_0`<a id="workdaystaffingorganizationassignmentchangesgetcostcenter_0"></a>

Retrieves a cost center for the specified organization assignment change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Organizations: Cost Center

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCostCenter_0Response =
  await workdaystaffing.organizationAssignmentChanges.getCostCenter_0({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesGetCostCenterResponse](./models/organization-assignment-changes-get-cost-center-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/costCenter` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.getCostingOrganizations`<a id="workdaystaffingorganizationassignmentchangesgetcostingorganizations"></a>

Retrieves the costing organizations for the specified organization assignment change ID. Costing organizations include: Grants, Funds, Programs, and Gifts.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Organizations: Grant, Fund, Program, Gift

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCostingOrganizationsResponse =
  await workdaystaffing.organizationAssignmentChanges.getCostingOrganizations({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesCostingDataA18edb56aca0100014a4a09dc57e045a](./models/organization-assignment-changes-costing-data-a18edb56aca0100014a4a09dc57e045a.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/costing/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.getCostingOrganizations_0`<a id="workdaystaffingorganizationassignmentchangesgetcostingorganizations_0"></a>

Retrieves the costing organizations for the specified organization assignment change ID. Costing organizations include: Grants, Funds, Programs, and Gifts.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Organizations: Grant, Fund, Program, Gift

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCostingOrganizations_0Response =
  await workdaystaffing.organizationAssignmentChanges.getCostingOrganizations_0(
    {
      iD: "iD_example",
    }
  );
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesGetCostingOrganizationsResponse](./models/organization-assignment-changes-get-costing-organizations-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/costing` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.getCustomOrganizations`<a id="workdaystaffingorganizationassignmentchangesgetcustomorganizations"></a>

Retrieves the custom organizations for the specified organization assignment change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Organizations: Custom Organization

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomOrganizationsResponse =
  await workdaystaffing.organizationAssignmentChanges.getCustomOrganizations({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesCustomOrganizationDetailsData53cd2b632146100011e9bf4e7041551f](./models/organization-assignment-changes-custom-organization-details-data53cd2b632146100011e9bf4e7041551f.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/customOrganizations/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.getCustomOrganizations_0`<a id="workdaystaffingorganizationassignmentchangesgetcustomorganizations_0"></a>

Retrieves the custom organizations for the specified organization assignment change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Organizations: Custom Organization

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomOrganizations_0Response =
  await workdaystaffing.organizationAssignmentChanges.getCustomOrganizations_0({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesGetCustomOrganizationsResponse](./models/organization-assignment-changes-get-custom-organizations-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/customOrganizations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.getInstance`<a id="workdaystaffingorganizationassignmentchangesgetinstance"></a>

Retrieves information about an organization assignment change event with the specified ID.

Secured by: Change Organization Assignment (REST), Staffing Organizations: Business Unit, Staffing Organizations: Company, Staffing Organizations: Cost Center, Staffing Organizations: Custom Organization, Staffing Organizations: Grant, Fund, Program, Gift, Staffing Organizations: Header, Staffing Organizations: Region

Scope: Organizations and Roles, Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstanceResponse =
  await workdaystaffing.organizationAssignmentChanges.getInstance({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

#### 🔄 Return<a id="🔄-return"></a>

[ChangeOrganizationAssignmentDefaultRepresentationDb2f38bfb555100012de1eb17c2f00ff](./models/change-organization-assignment-default-representation-db2f38bfb555100012de1eb17c2f00ff.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.getRegion`<a id="workdaystaffingorganizationassignmentchangesgetregion"></a>

Retrieves a region for the specified organization assignment change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Organizations: Region

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRegionResponse =
  await workdaystaffing.organizationAssignmentChanges.getRegion({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesGetRegionResponse](./models/organization-assignment-changes-get-region-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/region` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.getRegionById`<a id="workdaystaffingorganizationassignmentchangesgetregionbyid"></a>

Retrieves a region for the specified organization assignment change ID. 
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Organizations: Region

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRegionByIdResponse =
  await workdaystaffing.organizationAssignmentChanges.getRegionById({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesRegionDataA18edb56aca0100006997e68e5780373](./models/organization-assignment-changes-region-data-a18edb56aca0100006997e68e5780373.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/region/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.getStartDetails`<a id="workdaystaffingorganizationassignmentchangesgetstartdetails"></a>

Retrieves the start details for the specified organization assignment change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Organizations: Header

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStartDetailsResponse =
  await workdaystaffing.organizationAssignmentChanges.getStartDetails({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesStartDetailsData90009f2bfc49100017b10cd07d19063b](./models/organization-assignment-changes-start-details-data90009f2bfc49100017b10cd07d19063b.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/startDetails/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.getStartDetails_0`<a id="workdaystaffingorganizationassignmentchangesgetstartdetails_0"></a>

Retrieves the start details for the specified organization assignment change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

Secured by: Staffing Organizations: Header

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStartDetails_0Response =
  await workdaystaffing.organizationAssignmentChanges.getStartDetails_0({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesGetStartDetailsResponse](./models/organization-assignment-changes-get-start-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/startDetails` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.partiallyUpdateCompany`<a id="workdaystaffingorganizationassignmentchangespartiallyupdatecompany"></a>

Partially updates the company for the specified organization assignment change ID. 
The {subResourceID} path parameter must be the same as the {ID} value.

You can call GET /organizationAssignmentChanges/{ID}/company/{subResourceID} to get the existing data to update. 

The same Workday UI validations apply with this PATCH method. The data updates in this PATCH method do not persist until you call POST /organizationAssignmentChanges/{ID}/submit.

In the request body, specify the Workday ID of the company. 

To retrieve a companies ID, call the GET /values/organizationAssignmentChangesGroup/companies prompt endpoint, which takes the change organization assignment ID as the event query parameter. If you specify the event parameter, it returns HREF links to the companies by organization, as of the event's effective date. If you don't specify the event parameter, it returns HREF links to the companies by active organization based on the current date.

Secured by: Staffing Organizations: Company

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const partiallyUpdateCompanyResponse =
  await workdaystaffing.organizationAssignmentChanges.partiallyUpdateCompany({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### company: [`Company56fe0dd0eca1100019cfe097d26a03f2`](./models/company56fe0dd0eca1100019cfe097d26a03f2.ts)<a id="company-company56fe0dd0eca1100019cfe097d26a03f2modelscompany56fe0dd0eca1100019cfe097d26a03f2ts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesCompanyData652d516fdff41000086e0b9c96950354](./models/organization-assignment-changes-company-data652d516fdff41000086e0b9c96950354.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/company/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.partiallyUpdateCostingOptions`<a id="workdaystaffingorganizationassignmentchangespartiallyupdatecostingoptions"></a>

Partially updates the costing organizations for the specified organization assignment change ID. Costing organizations include: Grants, Funds, Programs, and Gifts.
The {subResourceID} path parameter must be the same as the {ID} value.

You can call GET /organizationAssignmentChanges/{ID}/costing/{subResourceID} to get the existing data to update. 

The same Workday UI validations apply with this PATCH method. The data updates in this PATCH method do not persist until you call POST /organizationAssignmentChanges/{ID}/submit.

In the request body, specify the Workday ID of the grant, program, gift, or fund you want to update.

To retrieve a grants ID, call the GET /values/organizationAssignmentChangesGroup/grants prompt endpoint, which takes the change organization assignment ID as the event query parameter. If you specify the event parameter, it returns HREF links to the grants by organization, as of the event's effective date. If you don't specify the event parameter, it returns HREF links to the grants by active organization based on the current date. 

To retrieve a funds ID, call the GET /values/organizationAssignmentChangesGroup/funds prompt endpoint, which takes the change organization assignment ID as the event query parameter. If you specify the event parameter, it returns HREF links to the funds by organization, as of the event's effective date. If you don't specify the event parameter, it returns HREF links to the funds by active organization based on the current date. 

To retrieve a programs ID, call the GET /values/organizationAssignmentChangesGroup/programs prompt endpoint, which takes the change organization assignment ID as the event query parameter. If you specify the event parameter, it returns HREF links to the programs by organization, as of the event's effective date. If you don't specify the event parameter, it returns HREF links to the programs by active organization based on the current date. 

To retrieve a gifts ID, call the GET /values/organizationAssignmentChangesGroup/gifts prompt endpoint, which takes the change organization assignment ID as the event query parameter. If you specify the event parameter, it returns HREF links to the gifts by organization, as of the event's effective date. If you don't specify the event parameter, it returns HREF links to the gifts by active organization based on the current date.

Secured by: Staffing Organizations: Grant, Fund, Program, Gift

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const partiallyUpdateCostingOptionsResponse =
  await workdaystaffing.organizationAssignmentChanges.partiallyUpdateCostingOptions(
    {
      iD: "iD_example",
      subresourceID: "subresourceID_example",
    }
  );
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### grant: [`GrantA18edb56aca0100014a4a0bcf25c045e`](./models/grant-a18edb56aca0100014a4a0bcf25c045e.ts)<a id="grant-granta18edb56aca0100014a4a0bcf25c045emodelsgrant-a18edb56aca0100014a4a0bcf25c045ets"></a>

##### program: [`ProgramA18edb56aca0100014a4a0b7ddf7045d`](./models/program-a18edb56aca0100014a4a0b7ddf7045d.ts)<a id="program-programa18edb56aca0100014a4a0b7ddf7045dmodelsprogram-a18edb56aca0100014a4a0b7ddf7045dts"></a>

##### gift: [`GiftA18edb56aca0100014a4a0a9f876045b`](./models/gift-a18edb56aca0100014a4a0a9f876045b.ts)<a id="gift-gifta18edb56aca0100014a4a0a9f876045bmodelsgift-a18edb56aca0100014a4a0a9f876045bts"></a>

##### fund: [`FundA18edb56aca0100014a4a0b27352045c`](./models/fund-a18edb56aca0100014a4a0b27352045c.ts)<a id="fund-funda18edb56aca0100014a4a0b27352045cmodelsfund-a18edb56aca0100014a4a0b27352045cts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesCostingDataA18edb56aca0100014a4a09dc57e045a](./models/organization-assignment-changes-costing-data-a18edb56aca0100014a4a09dc57e045a.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/costing/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.partiallyUpdateStartDetails`<a id="workdaystaffingorganizationassignmentchangespartiallyupdatestartdetails"></a>

Partially updates the start details for the specified organization assignment change ID. 
The {subResourceID} path parameter must be the same as the {ID} value.

In the request body, specify the effective date for the event. 

You can call GET /organizationAssignmentChanges/{ID}/startDetails/{subResourceID} to get the existing data to update. 

You can only update the date field once the event is initiated. These fields are read-only: worker, supervisoryOrganization, and position.

The same Workday UI validations apply with this PATCH method. 

The updates in this PATCH method do not persist until you call POST /organizationAssignmentChanges/{ID}/submit.

Secured by: Staffing Organizations: Header

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const partiallyUpdateStartDetailsResponse =
  await workdaystaffing.organizationAssignmentChanges.partiallyUpdateStartDetails(
    {
      iD: "iD_example",
      subresourceID: "subresourceID_example",
      date: "2024-03-23T07:00:00.000Z",
      position: null,
    }
  );
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### date: `string`<a id="date-string"></a>

The date this business process takes effect.

##### supervisoryOrganization: [`SupervisoryOrganization827372de445710001cfe36968a480000`](./models/supervisory-organization827372de445710001cfe36968a480000.ts)<a id="supervisoryorganization-supervisoryorganization827372de445710001cfe36968a480000modelssupervisory-organization827372de445710001cfe36968a480000ts"></a>

##### position: [`Position827372de4457100019c0e9c5977d0000`](./models/position827372de4457100019c0e9c5977d0000.ts)<a id="position-position827372de4457100019c0e9c5977d0000modelsposition827372de4457100019c0e9c5977d0000ts"></a>

##### worker: [`Worker90009f2bfc4910001b166d44a72c0727`](./models/worker90009f2bfc4910001b166d44a72c0727.ts)<a id="worker-worker90009f2bfc4910001b166d44a72c0727modelsworker90009f2bfc4910001b166d44a72c0727ts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesStartDetailsData90009f2bfc49100017b10cd07d19063b](./models/organization-assignment-changes-start-details-data90009f2bfc49100017b10cd07d19063b.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/startDetails/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.submitChangeRequest`<a id="workdaystaffingorganizationassignmentchangessubmitchangerequest"></a>

Submits the organization assignment change event for the specified ID, and initiates the Change Organization Assignment business process.

Submitting this request with an empty request body { } is equivalent to clicking the Submit button on the Change Organization Assgingment task in Workday.

For the equivalent of clicking the Save For Later button, specify the Save for Later Workday ID, ""d9e41a8c446c11de98360015c5e6daf6"", in the status{id} request field. 

Example:
{ ""status"": {
    ""id"": ""d9e41a8c446c11de98360015c5e6daf6""
  }
}

Secured by: Change Organization Assignment (REST)

Scope: Organizations and Roles

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const submitChangeRequestResponse =
  await workdaystaffing.organizationAssignmentChanges.submitChangeRequest({
    iD: "iD_example",
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### businessProcessParameters: [`BusinessProcessParameters23782ad3f54110002073aab65def00fb`](./models/business-process-parameters23782ad3f54110002073aab65def00fb.ts)<a id="businessprocessparameters-businessprocessparameters23782ad3f54110002073aab65def00fbmodelsbusiness-process-parameters23782ad3f54110002073aab65def00fbts"></a>

##### id: `string`<a id="id-string"></a>

Id of the instance

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

#### 🔄 Return<a id="🔄-return"></a>

[EventStateOrganizationAssignmentF3e1ff305e2d100003327f7b7fa103f1](./models/event-state-organization-assignment-f3e1ff305e2d100003327f7b7fa103f1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/submit` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.updateBusinessUnit`<a id="workdaystaffingorganizationassignmentchangesupdatebusinessunit"></a>

Partially updates the business unit option for the specified change organization assignment ID.
The {subResourceID} path parameter must be the same as the {ID} value.

You can call GET /organizationAssignmentChanges/{ID}/businessUnit/{subResourceID} to get the existing data to update. 

The same Workday UI validations apply with this PATCH method. The data updates in this PATCH method do not persist until you call POST /organizationAssignmentChanges/{ID}/submit.

In the request body, specify the Workday ID of the business unit. 

To retrieve a businessUnit ID, call the GET /values/organizationAssignmentChangesGroup/businessUnit prompt endpoint, which takes the change organization assignment ID as the event query parameter. If you specify the event parameter, it returns HREF links to the business units by organization, as of the event's effective date. If you don't specify the event parameter, it returns HREF links to the business units by active organization based on the current date.

Secured by: Staffing Organizations: Business Unit

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBusinessUnitResponse =
  await workdaystaffing.organizationAssignmentChanges.updateBusinessUnit({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### businessUnit: [`BusinessUnit5aabf8e28cb310002520b2aabc470366`](./models/business-unit5aabf8e28cb310002520b2aabc470366.ts)<a id="businessunit-businessunit5aabf8e28cb310002520b2aabc470366modelsbusiness-unit5aabf8e28cb310002520b2aabc470366ts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesBusinessUnitData5aabf8e28cb310002520b2a2b31d0365](./models/organization-assignment-changes-business-unit-data5aabf8e28cb310002520b2a2b31d0365.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/businessUnit/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.updateComment`<a id="workdaystaffingorganizationassignmentchangesupdatecomment"></a>

Partially updates the comment for the organization assignment change ID.
The {subResourceID} path parameter must be the same as the {ID} value.

The data updates in this PATCH method don't persist until you call POST/organizationAssignmentChanges/{ID}/submit.

To get the exising data to update, call GET/organizationAssignmentChanges/{ID}/comment/{subResourceID}.

Secured by: Change Organization Assignment (REST), Change Organization Assignments for  \~Worker\~ (Mass Action)

Scope: Organizations and Roles

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCommentResponse =
  await workdaystaffing.organizationAssignmentChanges.updateComment({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    comment:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### comment: `string`<a id="comment-string"></a>

The business process comment for a worker event before it\\\'s submitted.

#### 🔄 Return<a id="🔄-return"></a>

[Comments7d98fd55aeee100022968e52a1b31c60](./models/comments7d98fd55aeee100022968e52a1b31c60.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/comment/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.updateCostCenter`<a id="workdaystaffingorganizationassignmentchangesupdatecostcenter"></a>

Partially updates the cost center for the specified organization assignment change ID. 
The {subResourceID} path parameter must be the same as the {ID} value.

You can call GET /organizationAssignmentChanges/{ID}/costCenter/{subResourceID} to get the existing data to update. 

The same Workday UI validations apply with this PATCH method. The data updates in this PATCH method do not persist until you call POST /organizationAssignmentChanges/{ID}/submit.

In the request body, specify the Workday ID of the cost center. 

To retrieve a costCenter ID, call the GET /values/organizationAssignmentChangesGroup/costCenters prompt endpoint, which takes the change organization assignment ID as the event query parameter. If you specify the event parameter, it returns HREF links to the cost centers by organization, as of the event's effective date. If you don't specify the event parameter, it returns HREF links to the cost centers by active organization based on the current date.

Secured by: Staffing Organizations: Cost Center

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCostCenterResponse =
  await workdaystaffing.organizationAssignmentChanges.updateCostCenter({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### costCenter: [`CostCenter5aabf8e28cb3100010a999f40b07024f`](./models/cost-center5aabf8e28cb3100010a999f40b07024f.ts)<a id="costcenter-costcenter5aabf8e28cb3100010a999f40b07024fmodelscost-center5aabf8e28cb3100010a999f40b07024fts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesCostCenterData5aabf8e28cb3100010a999db2700024e](./models/organization-assignment-changes-cost-center-data5aabf8e28cb3100010a999db2700024e.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/costCenter/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.updateCustomOrganizations`<a id="workdaystaffingorganizationassignmentchangesupdatecustomorganizations"></a>

Partially updates the custom organizations for the specified organization assignment change ID. 
The {subResourceID} path parameter must be the same as the {ID} value.

You can call GET /organizationAssignmentChanges/{ID}/customorganization/{subResourceID} to get the existing data to update. 

The same Workday UI validations apply with this PATCH method. The data updates in this PATCH method do not persist until you call POST /organizationAssignmentChanges/{ID}/submit.

In the request body, specify the Workday ID of the custom organization {id}

To retrieve a custom organization ID, call the GET /values/organizationAssignmentChangesGroup/customs prompt endpoint, which takes the change organization assignment ID as the event query parameter. If you specify the event parameter, it returns HREF links to the custom organizations, as of the event's effective date. If you don't specify the event parameter, it returns HREF links to the active custom organizations based on the current date.

Secured by: Staffing Organizations: Custom Organization

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCustomOrganizationsResponse =
  await workdaystaffing.organizationAssignmentChanges.updateCustomOrganizations(
    {
      iD: "iD_example",
      subresourceID: "subresourceID_example",
    }
  );
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### customOrganizations: [`CustomOrganizationDetails3950e273020a100017857926d35d369c`](./models/custom-organization-details3950e273020a100017857926d35d369c.ts)[]<a id="customorganizations-customorganizationdetails3950e273020a100017857926d35d369cmodelscustom-organization-details3950e273020a100017857926d35d369cts"></a>

The new custom organizations for the worker as of the effective date.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesCustomOrganizationDetailsData53cd2b632146100011e9bf4e7041551f](./models/organization-assignment-changes-custom-organization-details-data53cd2b632146100011e9bf4e7041551f.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/customOrganizations/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.organizationAssignmentChanges.updateRegion`<a id="workdaystaffingorganizationassignmentchangesupdateregion"></a>

Partially updates the region for the specified organization assignment change ID. 

The {subResourceID} path parameter must be the same as the {ID} value.

In the request body, specify the Workday ID of the region. 

To retrieve a regions ID, call the GET /values/organizationAssignmentChangesGroup/regions prompt endpoint, which takes the change organization assignment ID as the event query parameter. If you specify the event parameter, it returns HREF links to the regions by organization, as of the event's effective date. If you don't specify the event parameter, it returns HREF links to the regions by active organization based on the current date.

Secured by: Staffing Organizations: Region

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRegionResponse =
  await workdaystaffing.organizationAssignmentChanges.updateRegion({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### region: [`RegionA18edb56aca0100006997ec7e07d0374`](./models/region-a18edb56aca0100006997ec7e07d0374.ts)<a id="region-regiona18edb56aca0100006997ec7e07d0374modelsregion-a18edb56aca0100006997ec7e07d0374ts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesRegionDataA18edb56aca0100006997e68e5780373](./models/organization-assignment-changes-region-data-a18edb56aca0100006997e68e5780373.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizationAssignmentChanges/{ID}/region/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.supervisoryOrganizations.getById`<a id="workdaystaffingsupervisoryorganizationsgetbyid"></a>

Retrieves a supervisory organization for the specified ID.

Secured by: BDA OAuth 2.0 Connector, Manage: Supervisory Organization, View: Supervisory Organization

Scope: Organizations and Roles

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await workdaystaffing.supervisoryOrganizations.getById(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### includeInactive: `boolean`<a id="includeinactive-boolean"></a>

If true, this method returns the inactive organizations. Default is false.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[SupervisoryOrganizationsGetByIdResponse](./models/supervisory-organizations-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/supervisoryOrganizations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.supervisoryOrganizations.getInstance`<a id="workdaystaffingsupervisoryorganizationsgetinstance"></a>

Retrieves a supervisory organization for the specified ID.

Secured by: BDA OAuth 2.0 Connector, Manage: Supervisory Organization, View: Supervisory Organization

Scope: Organizations and Roles

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstanceResponse =
  await workdaystaffing.supervisoryOrganizations.getInstance({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

#### 🔄 Return<a id="🔄-return"></a>

[SupervisoryOrganizationViewA02c2e1916fa100009e137235f1f0018](./models/supervisory-organization-view-a02c2e1916fa100009e137235f1f0018.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/supervisoryOrganizations/{ID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.supervisoryOrganizations.getMember`<a id="workdaystaffingsupervisoryorganizationsgetmember"></a>

Retrieves a member for the specified supervisory organization ID.

Secured by: Reports: Organization

Scope: Organizations and Roles

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMemberResponse =
  await workdaystaffing.supervisoryOrganizations.getMember({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[JobData1bfa8925c50510000ae4479925510026](./models/job-data1bfa8925c50510000ae4479925510026.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/supervisoryOrganizations/{ID}/members/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.supervisoryOrganizations.getMembers`<a id="workdaystaffingsupervisoryorganizationsgetmembers"></a>

Retrieves a collection of members for the specified supervisory organization ID.

Secured by: Reports: Organization

Scope: Organizations and Roles

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembersResponse =
  await workdaystaffing.supervisoryOrganizations.getMembers({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[SupervisoryOrganizationsGetMembersResponse](./models/supervisory-organizations-get-members-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/supervisoryOrganizations/{ID}/members` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.supervisoryOrganizations.getOrgChart`<a id="workdaystaffingsupervisoryorganizationsgetorgchart"></a>

Retrieves information about an organization chart of the specified supervisory organization id.

Secured by: Reports: Organization

Scope: Organizations and Roles

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOrgChartResponse =
  await workdaystaffing.supervisoryOrganizations.getOrgChart({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[SupervisoryOrganizationsGetOrgChartResponse](./models/supervisory-organizations-get-org-chart-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/supervisoryOrganizations/{ID}/orgChart` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.supervisoryOrganizations.getOrgChart_0`<a id="workdaystaffingsupervisoryorganizationsgetorgchart_0"></a>

Retrieves information about an organization chart of the specified supervisory organization id.

Secured by: Reports: Organization

Scope: Organizations and Roles

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOrgChart_0Response =
  await workdaystaffing.supervisoryOrganizations.getOrgChart_0({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[OrgChartView643e3a12629710000554e0338e670044](./models/org-chart-view643e3a12629710000554e0338e670044.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/supervisoryOrganizations/{ID}/orgChart/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.createCheckIn`<a id="workdaystaffingworkerscreatecheckin"></a>

Creates a single Check-In instance with the specified data with the specified worker. The worker is specified by the Workday ID of the worker.  You can use a returned id from GET /workers in the Staffing service /staffing.

In the request body, specify at least the required field: date. 
 
This endpoint is equivalent to the Create Check-In task in Workday.

Secured by: Worker Data: Check-Ins REST API

Scope: Performance Enablement

Contains attachment(s)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCheckInResponse = await workdaystaffing.workers.createCheckIn({
  iD: "iD_example",
  description:
    "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
  date: "2024-03-23T07:00:00.000Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### description: `string`<a id="description-string"></a>

Description of check-in.

##### associatedTopics: [`AssociatedCheckInTopicDetail316b5a26cc3c100010a01184c23902ea`](./models/associated-check-in-topic-detail316b5a26cc3c100010a01184c23902ea.ts)[]<a id="associatedtopics-associatedcheckintopicdetail316b5a26cc3c100010a01184c23902eamodelsassociated-check-in-topic-detail316b5a26cc3c100010a01184c23902eats"></a>

Topics included in a check-in.

##### date: `string`<a id="date-string"></a>

Date of check-in.

##### checkInAttachments: [`CheckInAttachmentDetailEf244acfe6cf10002ebe92d43a7701d7`](./models/check-in-attachment-detail-ef244acfe6cf10002ebe92d43a7701d7.ts)[]<a id="checkinattachments-checkinattachmentdetailef244acfe6cf10002ebe92d43a7701d7modelscheck-in-attachment-detail-ef244acfe6cf10002ebe92d43a7701d7ts"></a>

Returns all attachments for the Check-In.

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[CheckInDetail316b5a26cc3c10000ebdb0cb484602e1](./models/check-in-detail316b5a26cc3c10000ebdb0cb484602e1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/checkIns` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.createCheckInTopic`<a id="workdaystaffingworkerscreatecheckintopic"></a>

Creates a single Check-In topic instance with the specified data with the specified worker. The worker is specified by the Workday ID of the worker.  You can use a returned id from GET /workers in the Staffing service /staffing.

In the request body, specify at least these required fields: name. 

This endpoint is equivalent to the Create Check-In Topic task in Workday.

Secured by: Worker Data: Check-Ins REST API

Scope: Performance Enablement

Contains attachment(s)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCheckInTopicResponse =
  await workdaystaffing.workers.createCheckInTopic({
    iD: "iD_example",
    sharedNotes:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    privateNotes:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    name: "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### sharedNotes: `string`<a id="sharednotes-string"></a>

Shared notes of the topic.

##### associatedCheckIns: [`AssociatedCheckInDetail3267c0ba92a0100016ed105476ad03c4`](./models/associated-check-in-detail3267c0ba92a0100016ed105476ad03c4.ts)[]<a id="associatedcheckins-associatedcheckindetail3267c0ba92a0100016ed105476ad03c4modelsassociated-check-in-detail3267c0ba92a0100016ed105476ad03c4ts"></a>

Check-ins associated to topic.

##### privateNotes: `string`<a id="privatenotes-string"></a>

Personal notes of the topic.

##### name: `string`<a id="name-string"></a>

Topic name.

##### checkInTopicAttachments: [`CheckInTopicAttachmentDetail600ecde4c8421000278d06bfacea01c1`](./models/check-in-topic-attachment-detail600ecde4c8421000278d06bfacea01c1.ts)[]<a id="checkintopicattachments-checkintopicattachmentdetail600ecde4c8421000278d06bfacea01c1modelscheck-in-topic-attachment-detail600ecde4c8421000278d06bfacea01c1ts"></a>

Returns all attachments for the Check-In Topic.

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[CheckInTopicDetail3267c0ba92a010001688d79b032b03b8](./models/check-in-topic-detail3267c0ba92a010001688d79b032b03b8.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/checkInTopics` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.createExternalSkillLevels`<a id="workdaystaffingworkerscreateexternalskilllevels"></a>

Creates external skill levels.

Secured by: Self-Service: External Skill Source, Worker Data: External Skill Source

Scope: Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createExternalSkillLevelsResponse =
  await workdaystaffing.workers.createExternalSkillLevels({
    iD: "iD_example",
    externalSkillLevel: 8,
    externalSkillId:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    effectiveMoment: "2024-03-23T07:00:00.000Z",
    context:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### externalSkillLevel: `number`<a id="externalskilllevel-number"></a>

The skill level normalized to a scale from 1-5 and to 1 decimal place.

##### externalSkillId: `string`<a id="externalskillid-string"></a>

The skill from the external system.

##### effectiveMoment: `string`<a id="effectivemoment-string"></a>

The date that the external Skill Level was last updated.

##### context: `string`<a id="context-string"></a>

The text you enter to provide context for this external skill load. Not visible to end users.

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[ExternalSkillLevelA39462f09c44100005d46fd77ef00000](./models/external-skill-level-a39462f09c44100005d46fd77ef00000.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/externalSkillLevel` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.createHomeContactChangeProcess`<a id="workdaystaffingworkerscreatehomecontactchangeprocess"></a>

Creates a new Home Contact Change business process event for the parent Person.

Secured by: Change Home Contact Information (REST Service)

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createHomeContactChangeProcessResponse =
  await workdaystaffing.workers.createHomeContactChangeProcess({
    iD: "iD_example",
    href: "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    effective_date: "2024-03-23T07:00:00.000Z",
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### href: `string`<a id="href-string"></a>

The URL to the related change home contact information resource where this event can be interacted with via REST

##### effective_date: `string`<a id="effective_date-string"></a>

The date this business process takes effect.

##### id: `string`<a id="id-string"></a>

Id of the instance

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

#### 🔄 Return<a id="🔄-return"></a>

[HomeContactChangeEventF42ba27d87ed10001aa58a5d231b1621](./models/home-contact-change-event-f42ba27d87ed10001aa58a5d231b1621.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/homeContactInformationChanges` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.createSkillItem`<a id="workdaystaffingworkerscreateskillitem"></a>

Secured by: Person Data: Skills, Self-Service: Skills

Scope: Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSkillItemResponse = await workdaystaffing.workers.createSkillItem({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### skillItems: [`SkillItemAddDefinitionFaed9891d75a10001e9a289910540228`](./models/skill-item-add-definition-faed9891d75a10001e9a289910540228.ts)[]<a id="skillitems-skillitemadddefinitionfaed9891d75a10001e9a289910540228modelsskill-item-add-definition-faed9891d75a10001e9a289910540228ts"></a>

Exposes Skill Items for a Skill Qualification Enabled.

#### 🔄 Return<a id="🔄-return"></a>

[SkillItemsBulkDefinition9d815bbfd67010000d6ed56204ab12de](./models/skill-items-bulk-definition9d815bbfd67010000d6ed56204ab12de.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/skillItems` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.createWorkContactInformationChanges`<a id="workdaystaffingworkerscreateworkcontactinformationchanges"></a>

Creates a new Home Contact Change business process event for the parent Person.

Secured by: Change Work Contact Information (REST Service)

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createWorkContactInformationChangesResponse =
  await workdaystaffing.workers.createWorkContactInformationChanges({
    iD: "iD_example",
    effective_date: "2024-03-23T07:00:00.000Z",
    href: "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### effective_date: `string`<a id="effective_date-string"></a>

The date this business process takes effect.

##### href: `string`<a id="href-string"></a>

The URL to the related change work contact information resource where this event can be interacted with via REST.

##### id: `string`<a id="id-string"></a>

Id of the instance

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

#### 🔄 Return<a id="🔄-return"></a>

[WorkContactChangeEvent5fca6c96c1c81000142fd03784140113](./models/work-contact-change-event5fca6c96c1c81000142fd03784140113.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/workContactInformationChanges` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.deleteCheckIn`<a id="workdaystaffingworkersdeletecheckin"></a>

Deletes an existing Check-In instance with the specified ID. This can only be done by the creater of the Check-In. 
 
This endpoint is equivalent to the Delete Check-In task in Workday.

Secured by: Self-Service: Check-Ins

Scope: Performance Enablement

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCheckInResponse = await workdaystaffing.workers.deleteCheckIn({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/checkIns/{subresourceID}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.deleteCheckInTopic`<a id="workdaystaffingworkersdeletecheckintopic"></a>

Deletes an existing Check-In topic instance with the specified ID. This can only be done by the creater of the Check-In topic. 

This endpoint is equivalent to the Delete Check-In Topic task in Workday.

Secured by: Self-Service: Check-Ins

Scope: Performance Enablement

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCheckInTopicResponse =
  await workdaystaffing.workers.deleteCheckInTopic({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/checkInTopics/{subresourceID}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.getCheckIn`<a id="workdaystaffingworkersgetcheckin"></a>

Retrieves a Check-In with the specified ID for the specified worker. The worker is specified by the Workday ID of the worker.  You can use a returned id from GET /workers in the Staffing service /staffing.

Secured by: Self-Service: Check-Ins, Worker Data: Check-Ins

Scope: Performance Enablement

Contains attachment(s)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCheckInResponse = await workdaystaffing.workers.getCheckIn({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[CheckInsSummaryB3a69f47a499100010ce6be72bfe001d](./models/check-ins-summary-b3a69f47a499100010ce6be72bfe001d.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/checkIns/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.getCheckInTopic`<a id="workdaystaffingworkersgetcheckintopic"></a>

Retrieves a Check-In topic with the specified ID for the specified worker. The worker is specified by the Workday ID of the worker.  You can use a returned id from GET /workers in the Staffing service /staffing.

Secured by: Self-Service: Check-Ins, Worker Data: Check-Ins

Scope: Performance Enablement

Contains attachment(s)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCheckInTopicResponse = await workdaystaffing.workers.getCheckInTopic({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[CheckInTopicsSummaryD81c816de26f10000ef2c5cb2fdd0015](./models/check-in-topics-summary-d81c816de26f10000ef2c5cb2fdd0015.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/checkInTopics/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.getCheckInTopics`<a id="workdaystaffingworkersgetcheckintopics"></a>

Retrieves all Check-In topics for the specified worker. The worker is specified by the Workday ID of the worker.  You can use a returned id from GET /workers in the Staffing service /staffing.

Secured by: Self-Service: Check-Ins, Worker Data: Check-Ins

Scope: Performance Enablement

Contains attachment(s)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCheckInTopicsResponse = await workdaystaffing.workers.getCheckInTopics(
  {
    iD: "iD_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[WorkersGetCheckInTopicsResponse](./models/workers-get-check-in-topics-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/checkInTopics` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.getCheckIns`<a id="workdaystaffingworkersgetcheckins"></a>

Retrieves all Check-Ins for the specified worker. The worker is specified by the Workday ID of the worker.  You can use a returned id from GET /workers in the Staffing service /staffing. 

This endpoint is equivalent to the View Check-Ins task in Workday.

Secured by: Self-Service: Check-Ins, Worker Data: Check-Ins

Scope: Performance Enablement

Contains attachment(s)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCheckInsResponse = await workdaystaffing.workers.getCheckIns({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[WorkersGetCheckInsResponse](./models/workers-get-check-ins-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/checkIns` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.getCollectionStaffing`<a id="workdaystaffingworkersgetcollectionstaffing"></a>

Retrieves a collection of workers and current staffing information.

Secured by: Self-Service: Current Staffing Information, Worker Data: Public Worker Reports

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCollectionStaffingResponse =
  await workdaystaffing.workers.getCollectionStaffing({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### includeTerminatedWorkers: `boolean`<a id="includeterminatedworkers-boolean"></a>

Include terminated workers in the output

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### search: `string`<a id="search-string"></a>

Searches workers by name or worker ID. The search is case-insensitive. You can include space-delimited search strings for an OR search.

#### 🔄 Return<a id="🔄-return"></a>

[WorkersGetCollectionStaffingResponse](./models/workers-get-collection-staffing-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.getExplicitSkills`<a id="workdaystaffingworkersgetexplicitskills"></a>

Get Explicit Skills for Skill Enabled

Secured by: Person Data: Skills, Self-Service: Skills

Scope: Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getExplicitSkillsResponse =
  await workdaystaffing.workers.getExplicitSkills({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### skill: `string`<a id="skill-string"></a>

Retrieves the skills for the specified skill name.

##### skillSource: `string`<a id="skillsource-string"></a>

The Workday ID of the skill source. Returns skills associated with the skill source.

#### 🔄 Return<a id="🔄-return"></a>

[WorkersGetExplicitSkillsResponse](./models/workers-get-explicit-skills-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/explicitSkills` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.getExplicitSkillsForSkillEnabled`<a id="workdaystaffingworkersgetexplicitskillsforskillenabled"></a>

Get Explicit Skills for Skill Enabled

Secured by: Person Data: Skills, Self-Service: Skills

Scope: Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getExplicitSkillsForSkillEnabledResponse =
  await workdaystaffing.workers.getExplicitSkillsForSkillEnabled({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[DisplayExplicitSkillRepresentationD6ca778018011000182fa5be1ae901a8](./models/display-explicit-skill-representation-d6ca778018011000182fa5be1ae901a8.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/explicitSkills/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.getExternalSkillLevel`<a id="workdaystaffingworkersgetexternalskilllevel"></a>

Retrieves all external skill level information for a worker. You can filter the external skill levels by externalSkillId.

Secured by: Self-Service: External Skill Source, Worker Data: External Skill Source

Scope: Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getExternalSkillLevelResponse =
  await workdaystaffing.workers.getExternalSkillLevel({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### externalSkillId: `string`<a id="externalskillid-string"></a>

All External Skills. If passed, the External Skill Level associated with the External Skill ID.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[WorkersGetExternalSkillLevelResponse](./models/workers-get-external-skill-level-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/externalSkillLevel` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.getExternalSkillLevels`<a id="workdaystaffingworkersgetexternalskilllevels"></a>

Retrieves all external skill level information for a worker. You can filter the external skill levels by externalSkillId.

Secured by: Self-Service: External Skill Source, Worker Data: External Skill Source

Scope: Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getExternalSkillLevelsResponse =
  await workdaystaffing.workers.getExternalSkillLevels({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[ExternalSkillLevelDetail1c67ac98c0f310002706be33dcdb0000](./models/external-skill-level-detail1c67ac98c0f310002706be33dcdb0000.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/externalSkillLevel/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.getHomeContactChange`<a id="workdaystaffingworkersgethomecontactchange"></a>

Retrieves an existing Home Contact Change event for the Person.

Secured by: Change Home Contact Information (REST Service)

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getHomeContactChangeResponse =
  await workdaystaffing.workers.getHomeContactChange({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[HomeContactChangeEventF42ba27d87ed10001aa58a5d231b1621](./models/home-contact-change-event-f42ba27d87ed10001aa58a5d231b1621.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/homeContactInformationChanges/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.getServiceDate`<a id="workdaystaffingworkersgetservicedate"></a>

Retrieves information about a service date for the specified worker id.

Secured by: Self-Service: Service Dates, Worker Data: Service Dates

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getServiceDateResponse = await workdaystaffing.workers.getServiceDate({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[ServiceDatesData6b1db753fd82100027b0c8519c860018](./models/service-dates-data6b1db753fd82100027b0c8519c860018.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/serviceDates/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.getServiceDates`<a id="workdaystaffingworkersgetservicedates"></a>

Retrieves all service dates for the specified worker id.

Secured by: Self-Service: Service Dates, Worker Data: Service Dates

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getServiceDatesResponse = await workdaystaffing.workers.getServiceDates({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[WorkersGetServiceDatesResponse](./models/workers-get-service-dates-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/serviceDates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.getSkillItems`<a id="workdaystaffingworkersgetskillitems"></a>

Secured by: Person Data: Skills, Self-Service: Skills

Scope: Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSkillItemsResponse = await workdaystaffing.workers.getSkillItems({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[WorkersGetSkillItemsResponse](./models/workers-get-skill-items-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/skillItems` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.getSkillItemsById`<a id="workdaystaffingworkersgetskillitemsbyid"></a>

Secured by: Person Data: Skills, Self-Service: Skills

Scope: Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSkillItemsByIdResponse =
  await workdaystaffing.workers.getSkillItemsById({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[SkillItemDisplayDefinition4b4b7d34b4a21000301eaf52086700d8](./models/skill-item-display-definition4b4b7d34b4a21000301eaf52086700d8.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/skillItems/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.getStaffingInformation`<a id="workdaystaffingworkersgetstaffinginformation"></a>

Retrieves a collection of workers and current staffing information.

Secured by: Self-Service: Current Staffing Information, Worker Data: Public Worker Reports

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStaffingInformationResponse =
  await workdaystaffing.workers.getStaffingInformation({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

#### 🔄 Return<a id="🔄-return"></a>

[WorkerDataC2466b0778c610000d1936006720000e](./models/worker-data-c2466b0778c610000d1936006720000e.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.getWorkContactChange`<a id="workdaystaffingworkersgetworkcontactchange"></a>

Retrieves an existing Work Contact Change event for the Person.

Secured by: Change Work Contact Information (REST Service)

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkContactChangeResponse =
  await workdaystaffing.workers.getWorkContactChange({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[WorkContactChangeEvent5fca6c96c1c81000142fd03784140113](./models/work-contact-change-event5fca6c96c1c81000142fd03784140113.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/workContactInformationChanges/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.initiateJobChange`<a id="workdaystaffingworkersinitiatejobchange"></a>

Initiates a job change request for a specific worker
Call this method to start a new job change event, which returns a new job change ID. Use the new ID to reference the job change event in subsequent methods that update or get information about the same event.

The same Workday UI validations apply with this POST method.  The updates in this POST method do not persist until you call POST /jobChanges/{ID}/submit.

In the request body, specify at least this required field: date, worker {id}, job {id}, reason {id}

To retrieve a worker ID, call the GET /values/jobChangesGroup/workers prompt endpoint with the effectiveDate query parameter. It returns HREF links to workers by category. You can filter the results by effectiveDate. By default, it returns workers on the current date. Only workers without blocking events or available for change job for the current user are returned.

To retrieve a job ID, call the GET /values/jobChangesGroup/jobs prompt endpoint with the worker query parameter.  It returns all positions for the worker with current user access to do a job change. You can filter the results by effectiveDate. By default, it returns positions on the current date. 

To retrieve a reason ID, call the GET /values/jobChangesGroup/reason prompt endpoint, which takes the job change ID as the staffingEvent query parameter. If you specify the staffingEvent parameter, it returns change job reasons for the staffingEvent, by the change job category. By default, it returns all change job categories and reasons.

To retrieve a supervisoryOrganization ID, call the GET /values/jobChangesGroup/supervisoryOrganization prompt endpoint, with proposedManager and effectiveDate query parameters. If you specify the proposedManager parameter, it returns HREF links to all supervisory organizations for that manager. If you specify effectiveDate, it filters the results by effective date. The default is the current date.

To retrieve a location ID, call the GET /values/jobChangesGroup/locations prompt endpoint, which takes the staffingEvent query parameter.  It returns HREF links to locations by location categories for the specified location. You can filter the results by effectiveDate. By default, it returns locations on the current date.

Secured by: Change Job (REST Service)

Scope: Staffing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const initiateJobChangeResponse =
  await workdaystaffing.workers.initiateJobChange({
    iD: "iD_example",
    date: "2020-01-18T01:00:00.000Z",
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### supervisoryOrganization: [`SupervisoryOrganization75e528a78e9a10000ab75132a9df0116`](./models/supervisory-organization75e528a78e9a10000ab75132a9df0116.ts)<a id="supervisoryorganization-supervisoryorganization75e528a78e9a10000ab75132a9df0116modelssupervisory-organization75e528a78e9a10000ab75132a9df0116ts"></a>

##### location: [`Location75e528a78e9a10000ab75125ebe50114`](./models/location75e528a78e9a10000ab75125ebe50114.ts)<a id="location-location75e528a78e9a10000ab75125ebe50114modelslocation75e528a78e9a10000ab75125ebe50114ts"></a>

##### template: [`Template2b1b95dfe4af100007f63081aec5158e`](./models/template2b1b95dfe4af100007f63081aec5158e.ts)<a id="template-template2b1b95dfe4af100007f63081aec5158emodelstemplate2b1b95dfe4af100007f63081aec5158ets"></a>

##### reason: [`Reason85deac43cd1a10000b96c80c118f171e`](./models/reason85deac43cd1a10000b96c80c118f171e.ts)<a id="reason-reason85deac43cd1a10000b96c80c118f171emodelsreason85deac43cd1a10000b96c80c118f171ets"></a>

##### date: `string`<a id="date-string"></a>

The date this business process takes effect.

##### job: [`Job75e528a78e9a10000ab7512c5c550115`](./models/job75e528a78e9a10000ab7512c5c550115.ts)<a id="job-job75e528a78e9a10000ab7512c5c550115modelsjob75e528a78e9a10000ab7512c5c550115ts"></a>

##### id: `string`<a id="id-string"></a>

Id of the instance

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

#### 🔄 Return<a id="🔄-return"></a>

[JobChangesStartDetailsPOSTData75e528a78e9a10000ab750ea156f0111](./models/job-changes-start-details-postdata75e528a78e9a10000ab750ea156f0111.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/jobChanges` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.initiateOrganizationAssignmentChange`<a id="workdaystaffingworkersinitiateorganizationassignmentchange"></a>

Initiates an organization assignment change for a specific worker.
Call this method to start a new change organization assignment event, which returns a new change organization assignment ID. Use the new ID to reference the change organization assignment event in subsequent methods that update or get information about the same event.

The same Workday UI validations apply with this POST method.  The updates in this POST method do not persist until you call POST /organizationAssignmentChanges/{ID}/submit.

In the request body, specify at least this required field: date, worker {id}, job {id}

To retrieve a worker ID, call the GET /values/organizationAssignmentChangesGroup/workers prompt endpoint with the effectiveDate query parameter. It returns HREF links to workers by category. You can filter the results by effectiveDate. By default, it returns workers on the current date. Only workers without blocking events or available for organization assignment change for the current user are returned.

To retrieve a job ID, call the /values/organizationAssignmentChangesGroup/jobs prompt endpoint with the worker query parameter.  It returns all positions for the worker with current user access to do an organization assignment change . You can filter the results by effectiveDate. By default, it returns positions on the current date.

Secured by: Change Organization Assignment (REST)

Scope: Organizations and Roles

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const initiateOrganizationAssignmentChangeResponse =
  await workdaystaffing.workers.initiateOrganizationAssignmentChange({
    iD: "iD_example",
    date: "2024-03-23T07:00:00.000Z",
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### position: [`Position99f6257185e61000043aadd66df203bb`](./models/position99f6257185e61000043aadd66df203bb.ts)<a id="position-position99f6257185e61000043aadd66df203bbmodelsposition99f6257185e61000043aadd66df203bbts"></a>

##### date: `string`<a id="date-string"></a>

The date this business process takes effect.

##### id: `string`<a id="id-string"></a>

Id of the instance

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationAssignmentChangesPostCc45d62b623c1000132ac812c30a052e](./models/organization-assignment-changes-post-cc45d62b623c1000132ac812c30a052e.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/organizationAssignmentChanges` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.partiallyUpdateCheckIn`<a id="workdaystaffingworkerspartiallyupdatecheckin"></a>

Partially updates an existing Check-In instance with the specified ID and the specified data in the request body (archive). This can only be done by the creator or participant of the Check-In.
 
This endpoint is equivalent to the Archive Check-Ins task in Workday.

Secured by: Self-Service: Check-Ins, Worker Data: Check-Ins

Scope: Performance Enablement

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const partiallyUpdateCheckInResponse =
  await workdaystaffing.workers.partiallyUpdateCheckIn({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    archive: true,
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### archive: `boolean`<a id="archive-boolean"></a>

Indicates that the check-in is archived.

##### id: `string`<a id="id-string"></a>

Id of the instance

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

#### 🔄 Return<a id="🔄-return"></a>

[CheckInArchiveDetail1163fe23102e10001df342088f8a018e](./models/check-in-archive-detail1163fe23102e10001df342088f8a018e.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/checkIns/{subresourceID}?type&#x3D;archive` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.partiallyUpdateCheckInTopic`<a id="workdaystaffingworkerspartiallyupdatecheckintopic"></a>

Partially updates an existing Check-In topic instance with the specified ID and the specified data in the request body (name, privateNotes, sharedNotes, checkInTopicAttachments, or associatedCheckIns). This can only be done by the creator or participant of the Check-In. 

This endpoint is equivalent to the Edit Check-In Topic task in Workday.

Secured by: Self-Service: Check-Ins

Scope: Performance Enablement

Contains attachment(s)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const partiallyUpdateCheckInTopicResponse =
  await workdaystaffing.workers.partiallyUpdateCheckInTopic({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    sharedNotes:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    privateNotes:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    name: "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### sharedNotes: `string`<a id="sharednotes-string"></a>

Shared notes of the topic.

##### associatedCheckIns: [`AssociatedCheckInDetail3267c0ba92a0100016ed105476ad03c4`](./models/associated-check-in-detail3267c0ba92a0100016ed105476ad03c4.ts)[]<a id="associatedcheckins-associatedcheckindetail3267c0ba92a0100016ed105476ad03c4modelsassociated-check-in-detail3267c0ba92a0100016ed105476ad03c4ts"></a>

Check-ins associated to topic.

##### privateNotes: `string`<a id="privatenotes-string"></a>

Personal notes of the topic.

##### name: `string`<a id="name-string"></a>

Topic name.

##### checkInTopicAttachments: [`CheckInTopicAttachmentDetail600ecde4c8421000278d06bfacea01c1`](./models/check-in-topic-attachment-detail600ecde4c8421000278d06bfacea01c1.ts)[]<a id="checkintopicattachments-checkintopicattachmentdetail600ecde4c8421000278d06bfacea01c1modelscheck-in-topic-attachment-detail600ecde4c8421000278d06bfacea01c1ts"></a>

Returns all attachments for the Check-In Topic.

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[CheckInTopicDetail3267c0ba92a010001688d79b032b03b8](./models/check-in-topic-detail3267c0ba92a010001688d79b032b03b8.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/checkInTopics/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.saveUserSkills`<a id="workdaystaffingworkerssaveuserskills"></a>

Save skills a user has

Secured by: Self-Service: Skills

Scope: Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const saveUserSkillsResponse = await workdaystaffing.workers.saveUserSkills({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### skills: [`DisplayExplicitSkillRepresentationD6ca778018011000182fa5be1ae901a8`](./models/display-explicit-skill-representation-d6ca778018011000182fa5be1ae901a8.ts)[]<a id="skills-displayexplicitskillrepresentationd6ca778018011000182fa5be1ae901a8modelsdisplay-explicit-skill-representation-d6ca778018011000182fa5be1ae901a8ts"></a>

Explicit Skill Usages

##### skillItem: [`SkillItem98f198f5056b100019631445471d225f`](./models/skill-item98f198f5056b100019631445471d225f.ts)<a id="skillitem-skillitem98f198f5056b100019631445471d225fmodelsskill-item98f198f5056b100019631445471d225fts"></a>

##### skillSources: [`SkillItemSourceAddRepresentationC5fabc4ca81610000d5d15309ac90122`](./models/skill-item-source-add-representation-c5fabc4ca81610000d5d15309ac90122.ts)[]<a id="skillsources-skillitemsourceaddrepresentationc5fabc4ca81610000d5d15309ac90122modelsskill-item-source-add-representation-c5fabc4ca81610000d5d15309ac90122ts"></a>

Skill Sources

#### 🔄 Return<a id="🔄-return"></a>

[CreateSkillUsageRepresentation98f198f5056b1000196313ffe9a0225e](./models/create-skill-usage-representation98f198f5056b1000196313ffe9a0225e.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/explicitSkills` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.updateCheckIn`<a id="workdaystaffingworkersupdatecheckin"></a>

Partially updates an existing Check-In instance with the specified ID and the specified data in the request body (date, description, or associated topics). This can only be done by the creator or participant of the Check-In. 
 
This endpoint is equivalent to the Edit Check-In task in Workday.

Secured by: Self-Service: Check-Ins

Scope: Performance Enablement

Contains attachment(s)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCheckInResponse = await workdaystaffing.workers.updateCheckIn({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
  description:
    "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
  date: "2024-03-23T07:00:00.000Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### description: `string`<a id="description-string"></a>

Description of check-in.

##### associatedTopics: [`AssociatedCheckInTopicDetail316b5a26cc3c100010a01184c23902ea`](./models/associated-check-in-topic-detail316b5a26cc3c100010a01184c23902ea.ts)[]<a id="associatedtopics-associatedcheckintopicdetail316b5a26cc3c100010a01184c23902eamodelsassociated-check-in-topic-detail316b5a26cc3c100010a01184c23902eats"></a>

Topics included in a check-in.

##### date: `string`<a id="date-string"></a>

Date of check-in.

##### checkInAttachments: [`CheckInAttachmentDetailEf244acfe6cf10002ebe92d43a7701d7`](./models/check-in-attachment-detail-ef244acfe6cf10002ebe92d43a7701d7.ts)[]<a id="checkinattachments-checkinattachmentdetailef244acfe6cf10002ebe92d43a7701d7modelscheck-in-attachment-detail-ef244acfe6cf10002ebe92d43a7701d7ts"></a>

Returns all attachments for the Check-In.

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[CheckInDetail316b5a26cc3c10000ebdb0cb484602e1](./models/check-in-detail316b5a26cc3c10000ebdb0cb484602e1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/checkIns/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.updateCheckInTopicState`<a id="workdaystaffingworkersupdatecheckintopicstate"></a>

Partially updates an existing Check-In topic instance with the specified ID and the specified data in the request body (archive). This can only be done by the creator or participant of the Check-In. 

This endpoint is equivalent to the Archive Check-In Topic task in Workday.

Secured by: Self-Service: Check-Ins, Worker Data: Check-Ins

Scope: Performance Enablement

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCheckInTopicStateResponse =
  await workdaystaffing.workers.updateCheckInTopicState({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    archive: true,
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### archive: `boolean`<a id="archive-boolean"></a>

Indicates that the topic is archived.

##### id: `string`<a id="id-string"></a>

Id of the instance

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

#### 🔄 Return<a id="🔄-return"></a>

[CheckInTopicArchiveDetail1163fe23102e10001f72d77b213401a2](./models/check-in-topic-archive-detail1163fe23102e10001f72d77b213401a2.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/checkInTopics/{subresourceID}?type&#x3D;archive` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdaystaffing.workers.updateExternalSkillLevel`<a id="workdaystaffingworkersupdateexternalskilllevel"></a>

Updates external skill levels.

Secured by: Self-Service: External Skill Source, Worker Data: External Skill Source

Scope: Worker Profile and Skills

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateExternalSkillLevelResponse =
  await workdaystaffing.workers.updateExternalSkillLevel({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    externalSkillLevel: 8,
    externalSkillId:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    effectiveMoment: "2024-03-23T07:00:00.000Z",
    context:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### externalSkillLevel: `number`<a id="externalskilllevel-number"></a>

The skill level normalized to a scale from 1-5 and to 1 decimal place.

##### externalSkillId: `string`<a id="externalskillid-string"></a>

The skill from the external system.

##### effectiveMoment: `string`<a id="effectivemoment-string"></a>

The date that the external Skill Level was last updated.

##### context: `string`<a id="context-string"></a>

The text you enter to provide context for this external skill load. Not visible to end users.

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[ExternalSkillLevelA39462f09c44100005d46fd77ef00000](./models/external-skill-level-a39462f09c44100005d46fd77ef00000.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{ID}/externalSkillLevel/{subresourceID}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
