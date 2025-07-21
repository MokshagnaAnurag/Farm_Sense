import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Download, 
  Calendar, 
  TrendingUp,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

const Reports = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Reports & Analytics</h1>
          <p className="text-muted-foreground">Track performance and generate certification reports</p>
        </div>

        {/* Report Generation */}
        <Card className="p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Generate New Report</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-24 flex-col gap-2">
              <FileText className="h-6 w-6" />
              <span>Certification Report</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col gap-2">
              <TrendingUp className="h-6 w-6" />
              <span>Performance Analytics</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col gap-2">
              <Calendar className="h-6 w-6" />
              <span>Treatment Log</span>
            </Button>
          </div>
        </Card>

        {/* Recent Reports */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Reports</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Monthly Certification Report</p>
                  <p className="text-sm text-muted-foreground">Generated: January 15, 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Compliant
                </Badge>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-success" />
                <div>
                  <p className="font-medium">Weekly Performance Analytics</p>
                  <p className="text-sm text-muted-foreground">Generated: January 20, 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +15% Growth
                </Badge>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-warning" />
                <div>
                  <p className="font-medium">Treatment Effectiveness Report</p>
                  <p className="text-sm text-muted-foreground">Generated: January 18, 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Review Required
                </Badge>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Reports;