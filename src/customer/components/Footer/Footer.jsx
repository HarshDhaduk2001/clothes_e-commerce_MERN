import { Button, Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="py-5" variant="h6">
            Company
          </Typography>
          <div className="flex flex-col items-center justify-center">
            <Button className="pb-5" variant="contain">
              About
            </Button>
            <Button className="pb-5" variant="contain">
              Blog
            </Button>
            <Button className="pb-5" variant="contain">
              Press
            </Button>
            <Button className="pb-5" variant="contain">
              Jobs
            </Button>
            <Button className="pb-5" variant="contain">
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="py-5" variant="h6">
            Solutions
          </Typography>
          <div className="flex flex-col items-center justify-center">
            <Button className="pb-5" variant="contain">
              Marketing
            </Button>
            <Button className="pb-5" variant="contain">
              Analytics
            </Button>
            <Button className="pb-5" variant="contain">
              Commerce
            </Button>
            <Button className="pb-5" variant="contain">
              Insights
            </Button>
            <Button className="pb-5" variant="contain">
              Support
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="py-5" variant="h6">
            Documentation
          </Typography>
          <div className="flex flex-col items-center justify-center">
            <Button className="pb-5" variant="contain">
              Guides
            </Button>
            <Button className="pb-5" variant="contain">
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="py-5" variant="h6">
            Legal
          </Typography>
          <div className="flex flex-col items-center justify-center">
            <Button className="pb-5" variant="contain">
              Claim
            </Button>
            <Button className="pb-5" variant="contain">
              Privacy
            </Button>
            <Button className="pb-5" variant="contain">
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love by Me.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by{" "}
            <Link
              href="https://www.freepik.com"
              color="inherit"
              underline="always"
            >
              Freepik 
            </Link>
            &nbsp;from&nbsp;
            <Link
              href="https://www.freepik.com"
              color="inherit"
              underline="always"
            >
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
