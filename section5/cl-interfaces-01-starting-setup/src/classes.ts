abstract class Department {
    // private name: string;
    protected employees: string[] = [];
    static fiscalYear = 2024;

    constructor(protected readonly id: string, public name: string) {
        // this.name = n;
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log('Describe: IT Department - ID: ' + this.id);
    }

}

class AccountingDepartment extends Department {
    private lastReport: string;

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    describe() {
        console.log('Describe: Accounting Department - ID: ' + this.id);
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    addEmployee(employee: string): void {
        if (employee === 'Employee1') {
            return;
        }
        this.employees.push(employee);
    }

    addReport(report: string) {
        this.reports.push(report);
        this.lastReport = report;
    }

    printReports() {
        console.log(this.reports);
    }
}

class SecurityDepartment extends Department {
    private lastReport: string;
    private static instance: SecurityDepartment;

    private constructor(id: string, private reports: string[]) {
        super(id, 'Security');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (SecurityDepartment.instance) {
            return this.instance;
        }

        this.instance = new SecurityDepartment('s2', []);
        return this.instance;
    }

    describe() {
        console.log('Describe: Security Department - ID: ' + this.id);
    }

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    printReports() {
        console.log(this.reports);
    }
}

// const accounting = new Department('d1', 'Accounting');
// accounting.addEmployee('Employee1');
// accounting.addEmployee('Employee2');
// accounting.printEmployeeInformation();
// accounting.describe();

// const accountingCopy = { name: 'test', describe: accounting.describe };
// accountingCopy.describe();

const itDept = new ITDepartment('d2', ['Admin1']);
itDept.describe();
console.log(itDept);

const newAccounting = new AccountingDepartment('d3', []);
// newAccounting.mostRecentReport;
newAccounting.mostRecentReport = 'New Report';
console.log(newAccounting.mostRecentReport);
newAccounting.addReport('Something went wrong...');
newAccounting.addEmployee('Employee1');
newAccounting.addEmployee('Employee2');
console.log(newAccounting);
newAccounting.describe();

const staticEmployee = Department.createEmployee('staticEmployee');
console.log(staticEmployee);
console.log(Department.fiscalYear);

const security = SecurityDepartment.getInstance();
console.log(security)