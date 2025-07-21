import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Upload, 
  Bug, 
  AlertTriangle, 
  CheckCircle,
  Thermometer,
  Droplets,
  Wind
} from "lucide-react";

const PestControl = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Pest & Disease Control</h1>
          <p className="text-muted-foreground">Advanced AI diagnosis combined with IoT sensor data</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Upload Section */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Camera className="h-5 w-5" />
              Crop Image Analysis
            </h3>
            
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center mb-4">
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground mb-4">Upload or capture crop image</p>
              <div className="flex gap-3 justify-center">
                <Button variant="outline">
                  <Camera className="h-4 w-4 mr-2" />
                  Take Photo
                </Button>
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload File
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Additional Notes</label>
                <Textarea 
                  placeholder="Describe any symptoms or observations..."
                  className="mt-1"
                />
              </div>
              <Button className="w-full">
                <Bug className="h-4 w-4 mr-2" />
                Analyze for Pests & Diseases
              </Button>
            </div>
          </Card>

          {/* Environmental Data */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Environmental Conditions</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Thermometer className="h-4 w-4 text-primary" />
                  <span className="text-sm">Temperature</span>
                </div>
                <p className="text-2xl font-bold">28°C</p>
                <Badge variant="secondary" className="mt-1">Optimal</Badge>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">Humidity</span>
                </div>
                <p className="text-2xl font-bold">65%</p>
                <Badge variant="outline" className="mt-1">Normal</Badge>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Wind className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Wind Speed</span>
                </div>
                <p className="text-2xl font-bold">5 km/h</p>
                <Badge variant="secondary" className="mt-1">Light</Badge>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Bug className="h-4 w-4 text-warning" />
                  <span className="text-sm">Risk Level</span>
                </div>
                <p className="text-2xl font-bold">Low</p>
                <Badge variant="secondary" className="mt-1">Safe</Badge>
              </div>
            </div>

            <Card className="p-4 border-l-4 border-l-warning bg-warning/10">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
                <div>
                  <p className="font-medium text-warning">Seasonal Alert</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    High humidity levels may increase fungal disease risk. Monitor plants closely.
                  </p>
                </div>
              </div>
            </Card>
          </Card>
        </div>

        {/* Recent Diagnoses */}
        <Card className="p-6 mt-8">
          <h3 className="text-xl font-semibold mb-4">Recent Diagnoses</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <div>
                  <p className="font-medium">Healthy Plant</p>
                  <p className="text-sm text-muted-foreground">Sector A - Today 10:30 AM</p>
                </div>
              </div>
              <Badge variant="secondary">No Action Required</Badge>
            </div>

            <div className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-warning" />
                <div>
                  <p className="font-medium">Early Blight Detected</p>
                  <p className="text-sm text-muted-foreground">Sector B - Yesterday 3:45 PM</p>
                </div>
              </div>
              <Badge variant="outline">Neem Oil Applied</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PestControl;